import { Button, Card, Form, Input, Row, Col } from 'antd'
import { PageHero } from '../components/molecules/PageHero'

export function ContactPage() {
  return (
    <section className="nn-section">
      <PageHero title="Contact" subtitle="Need help? Our team is here for you." />
      <Row gutter={[20, 20]}>
        <Col xs={24} lg={8}>
          <Card>
            <h3>Call To Us</h3>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
            <hr />
            <h3>Write To Us</h3>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Email: customer@exclusive.com</p>
          </Card>
        </Col>
        <Col xs={24} lg={16}>
          <Card>
            <Form layout="vertical">
              <Row gutter={16}>
                <Col xs={24} md={8}>
                  <Form.Item label="Your Name">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item label="Your Email">
                    <Input type="email" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item label="Your Phone">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item label="Your Message">
                <Input.TextArea rows={6} />
              </Form.Item>
              <Button type="primary">Send Message</Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </section>
  )
}
