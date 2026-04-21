import { Button } from 'antd'
import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="nn-not-found">
      <h1>404 Not Found</h1>
      <p>Your visited page not found. You may go home page.</p>
      <Link to="/">
        <Button type="primary">Back to home page</Button>
      </Link>
    </section>
  )
}
