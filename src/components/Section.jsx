import Container from "./Container.jsx"

export default function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="py-16 md:py-24">
      <Container>
        <div className="max-w-3xl">
          {eyebrow ? <div className="badge">{eyebrow}</div> : null}
          {title ? <h2 className="section-title mt-4">{title}</h2> : null}
          {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        </div>
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  )
}

