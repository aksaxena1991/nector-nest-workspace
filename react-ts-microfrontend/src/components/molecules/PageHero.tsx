type PageHeroProps = {
  title: string
  subtitle: string
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <div className="nn-page-hero">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  )
}
