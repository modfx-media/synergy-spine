import Link from 'next/link'

type Section = { heading: string; body: string[] }

function isExternal(href: string): boolean {
  return /^(https?:)?\/\//i.test(href)
}

function RichParagraph({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g)
  return (
    <p>
      {parts.map((part, i) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (!match) return <span key={i}>{part}</span>
        const href = match[2]
        const external = isExternal(href)
        if (external) {
          return (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer">
              {match[1]}
            </a>
          )
        }
        return (
          <Link key={i} href={href.endsWith('/') || href.includes('#') || href.includes('?') ? href : `${href}/`}>
            {match[1]}
          </Link>
        )
      })}
    </p>
  )
}

export default function RankedArticleBody({
  intro,
  title,
  sections,
}: {
  intro?: string
  title?: string
  sections: Section[]
}) {
  const titleNorm = (title ?? '').replace(/\s+/g, ' ').trim().toLowerCase()
  const introNorm = (intro ?? '').replace(/\s+/g, ' ').trim().toLowerCase()
  return (
    <div className="prose prose-lg max-w-3xl prose-headings:font-serif prose-headings:text-brand-navyDark prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-brand-text prose-p:leading-relaxed prose-a:text-brand-blue prose-a:no-underline hover:prose-a:underline prose-strong:text-brand-navyDark prose-li:text-brand-text prose-img:rounded-xl prose-img:shadow-md">
      {intro && introNorm !== titleNorm ? <RichParagraph text={intro} /> : null}
      {sections.map((section, i) => {
        const headingNorm = section.heading.replace(/\s+/g, ' ').trim().toLowerCase()
        const hideHeading = Boolean(titleNorm) && headingNorm === titleNorm
        return (
          <section key={`${section.heading}-${i}`}>
            {section.heading && !hideHeading ? <h2>{section.heading}</h2> : null}
            {section.body.map((para, j) => (
              <RichParagraph key={j} text={para} />
            ))}
          </section>
        )
      })}
    </div>
  )
}
