import { Button, Card, Col, Form, Input, Radio, Row, Typography } from 'antd'
import { PageHero } from '../components/molecules/PageHero'

const { Text } = Typography

export function CheckoutPage() {
  return (
    <section className="nn-section">
      <PageHero title="Checkout" subtitle="Complete your order details" />
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={14}>
          <Card title="Billing Details">
            <Form layout="vertical">
              <Form.Item label="First Name">
                <Input />
              </Form.Item>
              <Form.Item label="Company Name">
                <Input />
              </Form.Item>
              <Form.Item label="Street Address">
                <Input />
              </Form.Item>
              <Form.Item label="Phone Number">
                <Input />
              </Form.Item>
              <Form.Item label="Email Address">
                <Input type="email" />
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col xs={24} lg={10}>
          <Card title="Order Summary">
            <div className="nn-summary-lines">
              <Text>LCD Monitor x1</Text>
              <Text>$650</Text>
              <Text>H1 Gamepad x2</Text>
              <Text>$1100</Text>
              <Text strong>Total</Text>
              <Text strong>$1750</Text>
            </div>
            <Radio.Group defaultValue="bank" className="nn-checkout-radio">
              <Radio value="bank">Bank</Radio>
              <Radio value="cod">Cash on delivery</Radio>
            </Radio.Group>
            <Button type="primary" block>
              Place order
            </Button>
          </Card>
        </Col>
      </Row>
    </section>
  )
}
