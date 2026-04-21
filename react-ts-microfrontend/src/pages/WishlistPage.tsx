import { Button, Col, Row } from 'antd'
import { PageHero } from '../components/molecules/PageHero'
import { ProductCard } from '../components/molecules/ProductCard'
import { flashSaleProducts } from '../data/homeData'

export function WishlistPage() {
  return (
    <section className="nn-section">
      <PageHero title="Wishlist" subtitle="Items you saved for later" />
      <Row gutter={[20, 20]}>
        {flashSaleProducts.map((product) => (
          <Col xs={24} sm={12} lg={8} xl={6} key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      <div className="nn-page-actions">
        <Button type="primary">Move All To Cart</Button>
      </div>
    </section>
  )
}
