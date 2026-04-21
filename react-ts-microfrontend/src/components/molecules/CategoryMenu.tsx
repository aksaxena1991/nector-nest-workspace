import { RightOutlined } from '@ant-design/icons'
import type { CategoryItem } from '../../data/homeData'
import { CategoryDropdown } from './CategoryDropdown'

type CategoryMenuProps = {
  items: CategoryItem[]
}

export function CategoryMenu({ items }: CategoryMenuProps) {
  return (
    <aside className="nn-category-menu">
      {items.map((item) => (
        <button type="button" className="nn-category-item" key={item.label}>
          {item.hasChildren ? (
            <CategoryDropdown label={item.label} />
          ) : (
            <span>{item.label}</span>
          )}
          {!item.hasChildren ? null : <RightOutlined />}
        </button>
      ))}
    </aside>
  )
}
