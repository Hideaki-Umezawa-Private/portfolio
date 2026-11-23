// サイト共通の動き(ライブラリ不要の素のJavaScript)
//   - スクロールで要素をふわっと表示(.reveal)
//   - ヘッダー: スマホメニューの開閉 / トップページでの背景切り替え・現在地ハイライト
//   - 「トップページへ戻る」ボタンで、トップページで見ていた位置に戻す
//   - フッターの年表示
;(function () {
  'use strict'

  var HOME_SCROLL_KEY = 'sabaume:homeScrollY'
  var RESTORE_KEY = 'sabaume:restoreHomeScroll'
  var isHome = location.pathname === '/' || location.pathname === '/index.html'

  function storageGet(key) {
    try {
      return sessionStorage.getItem(key)
    } catch (e) {
      return null
    }
  }
  function storageSet(key, value) {
    try {
      sessionStorage.setItem(key, value)
    } catch (e) {}
  }
  function storageRemove(key) {
    try {
      sessionStorage.removeItem(key)
    } catch (e) {}
  }

  // ---------- フッターの年 ----------
  document.querySelectorAll('[data-current-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear())
  })

  // ---------- スクロールで表示 ----------
  var reveals = document.querySelectorAll('.reveal')
  if (!('IntersectionObserver' in window)) {
    reveals.forEach(function (el) {
      el.classList.add('is-visible')
    })
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' },
    )
    reveals.forEach(function (el) {
      revealObserver.observe(el)
    })
  }

  // ---------- ヘッダー: スマホメニュー ----------
  var header = document.querySelector('.site-header')
  if (header) {
    var nav = header.querySelector('.site-nav')
    var toggle = header.querySelector('.menu-toggle')
    var isMenuOpen = false

    var setMenu = function (open) {
      isMenuOpen = open
      nav.classList.toggle('is-open', open)
      toggle.classList.toggle('is-open', open)
      toggle.setAttribute('aria-expanded', String(open))
      toggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く')
    }

    toggle.addEventListener('click', function () {
      setMenu(!isMenuOpen)
    })
    header.querySelectorAll('.brand, .site-nav a, .header-cta').forEach(function (link) {
      link.addEventListener('click', function () {
        setMenu(false)
      })
    })
    document.addEventListener('pointerdown', function (event) {
      if (isMenuOpen && !header.contains(event.target)) setMenu(false)
    })
    document.addEventListener('keydown', function (event) {
      if (isMenuOpen && event.key === 'Escape') setMenu(false)
    })
  }

  // ---------- トップページ専用 ----------
  if (isHome && header && header.hasAttribute('data-home-header')) {
    // ページ先頭では透明、スクロールすると背景が現れる + 今見ているセクションをハイライト
    var sectionIds = ['top', 'service', 'works', 'story', 'about', 'contact']
    var sections = sectionIds
      .map(function (id) {
        return document.getElementById(id)
      })
      .filter(Boolean)
    var navLinks = {}
    header.querySelectorAll('.site-nav a').forEach(function (link) {
      var href = link.getAttribute('href')
      navLinks[href === '/' ? 'top' : href.replace(/^\/#/, '')] = link
    })

    var onScroll = function () {
      var scrolled = window.scrollY > 40
      header.classList.toggle('site-header--transparent', !scrolled)
      header.classList.toggle('site-header--scrolled', scrolled)

      var marker = window.scrollY + 140
      var current = 'top'
      sections.forEach(function (section) {
        if (section.offsetTop <= marker) current = section.id
      })
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2 && sections.length) {
        current = sections[sections.length - 1].id
      }
      Object.keys(navLinks).forEach(function (key) {
        if (key === current) navLinks[key].setAttribute('aria-current', 'page')
        else navLinks[key].removeAttribute('aria-current')
      })

    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    // 「トップページへ戻る」で使う、トップページで最後に見ていた位置(実際のスクロール時だけ記録)
    window.addEventListener(
      'scroll',
      function () {
        storageSet(HOME_SCROLL_KEY, String(window.scrollY))
      },
      { passive: true },
    )

    // トップページ上の「Home」やロゴは再読み込みせず先頭へ(導入演出を再生しないため)
    document.querySelectorAll('a[href="/"]').forEach(function (link) {
      link.addEventListener('click', function (event) {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
          return
        }
        event.preventDefault()
        saveScroll()
        if (location.hash || location.pathname !== '/') history.pushState({}, '', '/')
        window.scrollTo({ top: 0, behavior: 'instant' })
      })
    })
  }

  // ---------- スクロール位置の復元 ----------
  // - ブラウザの戻る/進む: そのページで見ていた位置へ戻す(位置は履歴ごとに history.state に保存)
  // - 「トップページへ戻る」ボタン: トップページで最後に見ていた位置へ戻す
  // - それ以外: ブラウザ標準どおり(URLに #section があればその位置、なければ先頭)
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual'

  // 画像の読み込みなどでページの高さが足りないうちは届かないため、少しの間だけ再試行する
  function scrollToRestored(y) {
    var tries = 0
    var attempt = function () {
      window.scrollTo({ top: y, behavior: 'instant' })
      if (Math.abs(window.scrollY - y) > 2 && tries++ < 40) window.setTimeout(attempt, 25)
    }
    attempt()
  }

  function saveScroll() {
    var state = Object.assign({}, history.state, { scrollY: window.scrollY })
    try {
      history.replaceState(state, '')
    } catch (e) {}
  }

  var saveTimer = 0
  window.addEventListener(
    'scroll',
    function () {
      window.clearTimeout(saveTimer)
      saveTimer = window.setTimeout(saveScroll, 150)
    },
    { passive: true },
  )
  // ページを離れる直前(リンクのクリック時・ページを閉じる時)にも記録しておく
  document.addEventListener('click', saveScroll, true)
  window.addEventListener('pagehide', saveScroll)

  // 同じページ内での戻る/進む(#service などの移動)
  window.addEventListener('popstate', function (event) {
    if (event.state && typeof event.state.scrollY === 'number') scrollToRestored(event.state.scrollY)
  })

  var navEntry = performance.getEntriesByType && performance.getEntriesByType('navigation')[0]
  var navType = navEntry ? navEntry.type : ''
  if (navType === 'back_forward' && history.state && typeof history.state.scrollY === 'number') {
    scrollToRestored(history.state.scrollY)
  } else if (isHome && storageGet(RESTORE_KEY)) {
    storageRemove(RESTORE_KEY)
    scrollToRestored(Number(storageGet(HOME_SCROLL_KEY)) || 0)
  }
  storageRemove(RESTORE_KEY)

  // ---------- 「トップページへ戻る」ボタン ----------
  document.querySelectorAll('.back-to-top').forEach(function (link) {
    link.addEventListener('click', function () {
      storageSet(RESTORE_KEY, '1')
    })
  })
})()
