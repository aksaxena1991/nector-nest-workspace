import { Button } from 'antd'
import { SectionEyebrow } from '../atoms/SectionEyebrow'

export function PromoBanner() {
  return (
    <section className="nn-promo-banner">
      <div>
        <SectionEyebrow text="Categories" />
        <h2>Enhance Your Music Experience</h2>
        <div className="nn-promo-timer">
          <span>23 Hours</span>
          <span>05 Days</span>
          <span>59 Minutes</span>
          <span>35 Seconds</span>
        </div>
        <Button type="primary">Buy Now!</Button>
      </div>
      <img
        src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1200"
        alt="Featured speaker"
      />
    </section>
  )
}
