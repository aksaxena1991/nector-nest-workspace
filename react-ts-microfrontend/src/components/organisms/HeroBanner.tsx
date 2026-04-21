import { AppleFilled, ArrowRightOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { CategoryMenu } from '../molecules/CategoryMenu'
import { categoryMenu } from '../../data/homeData'

export function HeroBanner() {
  return (
    <section className="nn-hero-grid">
      <CategoryMenu items={categoryMenu} />
      <div className="nn-hero-panel">
        <div className="nn-hero-content">
          <p className="nn-hero-label">
            <AppleFilled />
            iPhone 14 Series
          </p>
          <h1>Up to 10% off Voucher</h1>
          <Button type="link" className="nn-hero-link" icon={<ArrowRightOutlined />}>
            Shop Now
          </Button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1580910051074-3eb694886505?w=1200"
          alt="Hero product"
        />
      </div>
    </section>
  )
}
