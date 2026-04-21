import { DownOutlined } from '@ant-design/icons'
import { Dropdown, type MenuProps } from 'antd'

const fashionItems = ['Dresses', 'Shoes', 'Bags', 'Watches', 'Accessories']

const dropdownItems: MenuProps['items'] = fashionItems.map((item) => ({
  key: item,
  label: item,
}))

type CategoryDropdownProps = {
  label: string
}

export function CategoryDropdown({ label }: CategoryDropdownProps) {
  return (
    <Dropdown menu={{ items: dropdownItems }} trigger={['hover']}>
      <span className="nn-category-dropdown">
        {label}
        <DownOutlined />
      </span>
    </Dropdown>
  )
}
