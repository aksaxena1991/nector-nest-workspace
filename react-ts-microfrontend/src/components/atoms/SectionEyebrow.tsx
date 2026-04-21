type SectionEyebrowProps = {
  text: string
}

export function SectionEyebrow({ text }: SectionEyebrowProps) {
  return (
    <div className="nn-eyebrow">
      <span className="nn-eyebrow-bar" />
      <span>{text}</span>
    </div>
  )
}
