import { DownOutlined, UserOutlined } from '@ant-design/icons'
import { Dropdown, type MenuProps } from 'antd'
import { Link } from 'react-router-dom'

const accountMenu: MenuProps['items'] = [
  { key: 'account', label: <Link to="/account">Manage My Account</Link> },
  { key: 'orders', label: <Link to="/orders">My Orders</Link> },
  { key: 'wishlist', label: <Link to="/wishlist">My Wishlist</Link> },
  { key: 'logout', label: <Link to="/login">Logout</Link> },
]

export function AccountDropdown() {
  return (
    <Dropdown menu={{ items: accountMenu }} trigger={['click']}>
      <button type="button" className="nn-account-trigger">
        <UserOutlined />
        Account
        <DownOutlined />
      </button>
    </Dropdown>
  )
}
