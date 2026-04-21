import { Button, Card, InputNumber, Table, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/molecules/PageHero'

const { Text } = Typography

const rows = [
  { key: '1', product: 'LCD Monitor', price: 650, quantity: 1, total: 650 },
  { key: '2', product: 'H1 Gamepad', price: 550, quantity: 2, total: 1100 },
]

export function CartPage() {
  return (
    <section className="nn-section">
      <PageHero title="Your Cart" subtitle="Review your selected products" />
      <Table
        rowKey="key"
        pagination={false}
        dataSource={rows}
        columns={[
          { title: 'Product', dataIndex: 'product' },
          { title: 'Price', dataIndex: 'price', render: (value) => `$${value}` },
          {
            title: 'Quantity',
            dataIndex: 'quantity',
            render: (value) => <InputNumber min={1} defaultValue={value} />,
          },
          { title: 'Subtotal', dataIndex: 'total', render: (value) => `$${value}` },
        ]}
      />
      <Card className="nn-summary-card">
        <Text>Subtotal: $1750</Text>
        <Text>Shipping: Free</Text>
        <Text strong>Total: $1750</Text>
        <Link to="/checkout">
          <Button type="primary" block>
            Proceed to checkout
          </Button>
        </Link>
      </Card>
    </section>
  )
}
