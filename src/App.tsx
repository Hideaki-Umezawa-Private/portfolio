import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useScrollToHash } from './hooks/useScrollToHash'
import { FaqPage } from './pages/FaqPage'
import { Home } from './pages/Home'
import { PrivacyPage } from './pages/PrivacyPage'
import { ProcessPage } from './pages/ProcessPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { ShopPlanPage } from './pages/ShopPlanPage'
import { WorksPage } from './pages/WorksPage'

function App() {
  useScrollToHash()

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<WorksPage />} />
      <Route path="/service" element={<ServiceDetailPage />} />
      <Route path="/shop-plan" element={<ShopPlanPage />} />
      <Route path="/process" element={<ProcessPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
    </Routes>
  )
}

export default App
