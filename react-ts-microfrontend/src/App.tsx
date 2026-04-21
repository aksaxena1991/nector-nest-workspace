import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { StoreTemplate } from './components/templates/StoreTemplate'
import { AboutPage } from './pages/AboutPage'
import { AccountPage } from './pages/AccountPage'
import { CartPage } from './pages/CartPage'
import { CheckoutPage } from './pages/CheckoutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { MyOrdersPage } from './pages/MyOrdersPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProductDetailsPage } from './pages/ProductDetailsPage'
import { SignupPage } from './pages/SignupPage'
import { WishlistPage } from './pages/WishlistPage'
import './styles/ecommerce.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<StoreTemplate />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/orders" element={<MyOrdersPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products/:productId" element={<ProductDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
