import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Badge } from 'antd'
import { Link, NavLink } from 'react-router-dom'
import { BrandLogo } from '../atoms/BrandLogo'
import { AccountDropdown } from '../molecules/AccountDropdown'
import { SearchBar } from '../molecules/SearchBar'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Contact', to: '/contact' },
  { label: 'About', to: '/about' },
  { label: 'Sign Up', to: '/signup' },
]

export function MainHeader() {
  return (
    <header className="nn-main-header">
      <Link to="/" className="nn-brand-link">
        <BrandLogo />
      </Link>
      <nav className="nn-main-nav">
        {navItems.map((item) => (
          <NavLink key={item.label} to={item.to} className={({ isActive }) => (isActive ? 'active' : '')}>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="nn-header-tools">
        <SearchBar />
        <AccountDropdown />
        <Link to="/wishlist">
          <Badge count={2}>
            <HeartOutlined className="nn-icon-btn" />
          </Badge>
        </Link>
        <Link to="/cart">
          <Badge count={1}>
            <ShoppingCartOutlined className="nn-icon-btn" />
          </Badge>
        </Link>
      </div>
    </header>
  )
}
