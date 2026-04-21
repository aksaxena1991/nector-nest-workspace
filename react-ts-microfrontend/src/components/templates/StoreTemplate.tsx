import { Outlet } from 'react-router-dom'
import { Footer } from '../organisms/Footer'
import { MainHeader } from '../organisms/MainHeader'
import { TopPromoBar } from '../organisms/TopPromoBar'

export function StoreTemplate() {
  return (
    <div className="nn-page">
      <TopPromoBar />
      <div className="nn-container">
        <MainHeader />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
