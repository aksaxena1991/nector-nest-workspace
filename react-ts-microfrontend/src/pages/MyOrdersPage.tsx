import { Button, Table, Tag } from 'antd'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/molecules/PageHero'

const orderRows = [
  {
    key: 'ORD-1001',
    orderId: 'ORD-1001',
    date: '2026-04-10',
    total: '$650',
    status: 'Delivered',
  },
  {
    key: 'ORD-1002',
    orderId: 'ORD-1002',
    date: '2026-04-16',
    total: '$1100',
    status: 'Shipped',
  },
  {
    key: 'ORD-1003',
    orderId: 'ORD-1003',
    date: '2026-04-20',
    total: '$375',
    status: 'Processing',
  },
]

export function MyOrdersPage() {
  return (
    <section className="nn-section">
      <PageHero title="My Orders" subtitle="Track all your recent and past purchases" />
      <Table
        rowKey="key"
        dataSource={orderRows}
        pagination={false}
        columns={[
          { title: 'Order ID', dataIndex: 'orderId' },
          { title: 'Date', dataIndex: 'date' },
          { title: 'Total', dataIndex: 'total' },
          {
            title: 'Status',
            dataIndex: 'status',
            render: (value: string) => {
              if (value === 'Delivered') return <Tag color="green">{value}</Tag>
              if (value === 'Shipped') return <Tag color="blue">{value}</Tag>
              return <Tag color="orange">{value}</Tag>
            },
          },
          {
            title: 'Action',
            render: () => (
              <Link to="/contact">
                <Button size="small">Get support</Button>
              </Link>
            ),
          },
        ]}
      />
    </section>
  )
}
