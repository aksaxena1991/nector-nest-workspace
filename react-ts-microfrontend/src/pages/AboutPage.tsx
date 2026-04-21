import { Card, Col, Row, Statistic } from 'antd'
import { PageHero } from '../components/molecules/PageHero'

export function AboutPage() {
  return (
    <section className="nn-section">
      <PageHero
        title="Our Story"
        subtitle="Exclusive started in 2015 with a mission to simplify online shopping."
      />
      <Row gutter={[20, 20]}>
        <Col xs={24} md={12}>
          <Card>
            We provide premium ecommerce experience with trusted payments, curated products,
            and fast delivery across regions.
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Card>
                <Statistic title="Sellers active" value={10500} />
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <Statistic title="Monthly sales" value={33000} />
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <Statistic title="Customers" value={45500} />
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <Statistic title="Annual growth" value={25} suffix="%" />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  )
}
