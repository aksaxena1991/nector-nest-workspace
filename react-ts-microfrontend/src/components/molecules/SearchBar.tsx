import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

export function SearchBar() {
  return (
    <Input
      className="nn-search"
      placeholder="What are you looking for?"
      suffix={<SearchOutlined />}
    />
  )
}
