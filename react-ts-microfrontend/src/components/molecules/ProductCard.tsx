import { Card, Rate, Tag, Typography } from 'antd'
import { Link } from 'react-router-dom'
import type { ProductItem } from '../../data/homeData'

const { Text } = Typography

type ProductCardProps = {
  product: ProductItem
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card
      className="nn-product-card"
      cover={<img src={product.image} alt={product.title} className="nn-product-image" />}
    >
      <div className="nn-product-body">
        {product.discount ? <Tag color="red">{product.discount}</Tag> : null}
        <Text strong>{product.title}</Text>
        <div className="nn-price-row">
          <Text className="nn-price-main">${product.price}</Text>
          {product.oldPrice ? <Text delete>${product.oldPrice}</Text> : null}
        </div>
        <div className="nn-rating-row">
          <Rate allowHalf disabled defaultValue={product.rating} />
          <Text type="secondary">({product.reviews})</Text>
        </div>
        <Link to={`/products/${product.id}`} className="nn-view-details-link">
          View details
        </Link>
      </div>
    </Card>
  )
}
