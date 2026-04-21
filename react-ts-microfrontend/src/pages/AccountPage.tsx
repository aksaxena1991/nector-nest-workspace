import { Card, Col, Form, Input, Row, Typography } from 'antd'
import { PageHero } from '../components/molecules/PageHero'

const { Title } = Typography

export function AccountPage() {
  return (
    <section className="nn-section">
      <PageHero title="Manage My Account" subtitle="Update your profile and address details" />
      <Row gutter={[20, 20]}>
        <Col xs={24} lg={8}>
          <Card>
            <Title level={5}>My Account</Title>
            <p>My Profile</p>
            <p>Address Book</p>
            <p>My Payment Options</p>
          </Card>
        </Col>
        <Col xs={24} lg={16}>
          <Card title="Edit Your Profile">
            <Form layout="vertical">
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="First Name">
                    <Input defaultValue="Md" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Last Name">
                    <Input defaultValue="Rimel" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Email">
                    <Input defaultValue="rimel1111@gmail.com" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Address">
                    <Input defaultValue="Kingston, 5236, United State" />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </section>
  )
}
