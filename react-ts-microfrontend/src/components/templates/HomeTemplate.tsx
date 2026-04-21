import { CategoryStrip } from '../organisms/CategoryStrip'
import { HeroBanner } from '../organisms/HeroBanner'
import { ProductSection } from '../organisms/ProductSection'
import { PromoBanner } from '../organisms/PromoBanner'
import { flashSaleProducts } from '../../data/homeData'

export function HomeTemplate() {
  return (
    <>
      <HeroBanner />
      <ProductSection eyebrow="Today's" title="Flash Sales" products={flashSaleProducts} />
      <CategoryStrip />
      <ProductSection
        eyebrow="This Month"
        title="Best Selling Products"
        products={flashSaleProducts}
        cta="View All"
      />
      <PromoBanner />
    </>
  )
}
