import { Col, Row } from 'antd'
import { browseCategories } from '../../data/homeData'
import { SectionEyebrow } from '../atoms/SectionEyebrow'

export function CategoryStrip() {
  return (
    <section className="nn-section">
      <SectionEyebrow text="Categories" />
      <h2>Browse By Category</h2>
      <Row gutter={[16, 16]}>
        {browseCategories.map((item) => (
          <Col xs={12} md={8} lg={4} key={item}>
            <div className="nn-category-tile">{item}</div>
          </Col>
        ))}
      </Row>
    </section>
  )
}
