import { Button, Card, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/molecules/PageHero'

export function SignupPage() {
  return (
    <section className="nn-auth-page">
      <PageHero title="Create an account" subtitle="Join and start shopping today" />
      <Card className="nn-auth-card">
        <Form layout="vertical">
          <Form.Item label="Full Name">
            <Input placeholder="John Doe" />
          </Form.Item>
          <Form.Item label="Email">
            <Input type="email" placeholder="you@example.com" />
          </Form.Item>
          <Form.Item label="Password">
            <Input.Password placeholder="Set a strong password" />
          </Form.Item>
          <Button type="primary" block>
            Create Account
          </Button>
          <p className="nn-auth-switch">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </Form>
      </Card>
    </section>
  )
}
