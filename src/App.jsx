import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import DividerGlow from "./components/DividerGlow.jsx"
import Section from "./components/Section.jsx"
import ServicesGrid from "./components/ServicesGrid.jsx"
import WorkGrid from "./components/WorkGrid.jsx"
import WhyUs from "./components/WhyUs.jsx"
import Process from "./components/Process.jsx"
import Testimonials from "./components/Testimonials.jsx"
import ContactBlock from "./components/ContactBlock.jsx"
import WhatsAppFab from "./components/WhatsAppFab.jsx"
import Footer from "./components/Footer.jsx"
import LogosStrip from "./components/LogosStrip.jsx"

function TinyPolicy({ id, title, text }) {
  return (
    <div id={id} className="card mt-10">
      <div className="text-lg font-extrabold">{title}</div>
      <p className="mt-2 text-violet-100/80">{text}</p>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />

        <div className="mt-6">
          <DividerGlow />
        </div>

        <LogosStrip />

        <Section
          id="about"
          eyebrow="Who we are"
          title="A small studio with big standards."
          subtitle="We design and build premium digital products — from landing pages to full mobile apps. Simple, modern, and built to scale."
        >
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card">
              <div className="text-lg font-extrabold">Mission</div>
              <p className="mt-2 text-violet-100/80">
                Build products that feel effortless for users and powerful for businesses.
              </p>
            </div>
            <div className="card">
              <div className="text-lg font-extrabold">Focus</div>
              <p className="mt-2 text-violet-100/80">
                Performance, clean UI, and real-world usability — not just visuals.
              </p>
            </div>
            <div className="card">
              <div className="text-lg font-extrabold">Approach</div>
              <p className="mt-2 text-violet-100/80">
                Short feedback loops, clear deliverables, and fast iterations.
              </p>
            </div>
          </div>
        </Section>

        <Section
          id="services"
          eyebrow="What we do"
          title="Services designed for modern teams."
          subtitle="Whether you need a website, a mobile app, or a full product build — we bring a premium finish and reliable execution."
        >
          <ServicesGrid />
        </Section>

        <Section
          id="work"
          eyebrow="Selected work"
          title="A few examples of what we build."
          subtitle="Swap these preview projects with your real client work any time. Each card can link to a live demo or a full case study."
        >
          <WorkGrid />
        </Section>

        <Section
          id="why"
          eyebrow="The difference"
          title="Premium look. Clean code. Smooth delivery."
          subtitle="A strong product isn’t only about visuals — it’s about how it performs, how it feels, and how easy it is to maintain."
        >
          <WhyUs />
        </Section>

        <Section
          id="process"
          eyebrow="How we work"
          title="A simple process that ships."
          subtitle="Clear scope. Quick iterations. Reliable delivery."
        >
          <Process />
        </Section>

        <Section
          id="reviews"
          eyebrow="Reviews"
          title="What people say."
          subtitle="Short, direct feedback that highlights delivery quality and communication."
        >
          <Testimonials />
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Let’s build something meaningful."
          subtitle="If you want to join the family, message us now and we’ll respond quickly."
        >
          <ContactBlock />
          <TinyPolicy
            id="privacy"
            title="Privacy"
            text="We only use your contact details to respond to your inquiry. We don’t sell or share your information."
          />
          <TinyPolicy
            id="terms"
            title="Terms"
            text="All timelines and estimates depend on scope. We confirm deliverables before starting any work."
          />
        </Section>

        <div className="pb-10" />
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  )
}
