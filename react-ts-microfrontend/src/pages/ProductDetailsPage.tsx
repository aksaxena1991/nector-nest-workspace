import { Button, Card, Col, Rate, Row, Tag, Typography } from 'antd'
import { useParams } from 'react-router-dom'
import { flashSaleProducts } from '../data/homeData'

const { Title, Paragraph, Text } = Typography

export function ProductDetailsPage() {
  const { productId } = useParams()
  const product = flashSaleProducts.find((item) => item.id === Number(productId))

  if (!product) {
    return (
      <section className="nn-section">
        <Title level={3}>Product Not Found</Title>
        <Paragraph>We could not find the requested product.</Paragraph>
      </section>
    )
  }

  return (
    <section className="nn-section">
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={12}>
          <Card cover={<img src={product.image} alt={product.title} className="nn-detail-image" />} />
        </Col>
        <Col xs={24} lg={12}>
          <Title level={2}>{product.title}</Title>
          <div className="nn-rating-row">
            <Rate disabled allowHalf defaultValue={product.rating} />
            <Text type="secondary">({product.reviews} Reviews)</Text>
            <Tag color="green">In Stock</Tag>
          </div>
          <Title level={3}>${product.price}</Title>
          <Paragraph>
            Premium build quality and ergonomic design optimized for everyday use.
          </Paragraph>
          <div className="nn-page-actions">
            <Button type="primary">Buy Now</Button>
            <Button>Add to Cart</Button>
          </div>
        </Col>
      </Row>
    </section>
  )
}
