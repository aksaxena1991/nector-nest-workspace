import { Button, Col, Row, Typography } from 'antd'
import type { ProductItem } from '../../data/homeData'
import { SectionEyebrow } from '../atoms/SectionEyebrow'
import { ProductCard } from '../molecules/ProductCard'

const { Title } = Typography

type ProductSectionProps = {
  eyebrow: string
  title: string
  products: ProductItem[]
  cta?: string
}

export function ProductSection({ eyebrow, title, products, cta }: ProductSectionProps) {
  return (
    <section className="nn-section">
      <div className="nn-section-head">
        <div>
          <SectionEyebrow text={eyebrow} />
          <Title level={2}>{title}</Title>
        </div>
        {cta ? <Button type="primary">{cta}</Button> : null}
      </div>
      <Row gutter={[20, 20]}>
        {products.map((product) => (
          <Col xs={24} sm={12} lg={6} key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </section>
  )
}
