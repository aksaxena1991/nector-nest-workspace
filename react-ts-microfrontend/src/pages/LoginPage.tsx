import { Button, Card, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/molecules/PageHero'

export function LoginPage() {
  return (
    <section className="nn-auth-page">
      <PageHero title="Log in to Exclusive" subtitle="Enter your details below" />
      <Card className="nn-auth-card">
        <Form layout="vertical">
          <Form.Item label="Email">
            <Input type="email" placeholder="you@example.com" />
          </Form.Item>
          <Form.Item label="Password">
            <Input.Password placeholder="Your password" />
          </Form.Item>
          <Button type="primary" block>
            Login
          </Button>
          <p className="nn-auth-switch">
            New here? <Link to="/signup">Create account</Link>
          </p>
        </Form>
      </Card>
    </section>
  )
}
