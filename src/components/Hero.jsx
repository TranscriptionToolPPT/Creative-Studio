import { motion } from "framer-motion"
import Container from "./Container.jsx"
import { SITE } from "../config.js"
import { Sparkles, ArrowRight, Calendar, FolderKanban, Waves, PlayCircle } from "lucide-react"

export default function Hero() {
  const calendly = SITE.calendly?.trim()

  return (
    <section className="relative pt-16 md:pt-20 pb-16 md:pb-20 noise">
      <div aria-hidden className="hero-spotlights" />
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <div className="badge">
              <Sparkles size={14} />
              AI & Digital Systems Studio
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl text-slate-50 leading-[1.03]"
            >
              We Build Revenue-Driven Digital Systems & AI Solutions.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
              className="mt-5 text-slate-300/90 max-w-2xl text-[1.04rem] leading-relaxed"
            >
              We design and develop intelligent digital products that increase performance, optimize operations, and drive measurable business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.16 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#contact" className="btn-primary has-arrow">
                Start Your Project <ArrowRight size={16} className="arrow" />
              </a>

              <a href={calendly || "#contact"} target={calendly ? "_blank" : undefined} rel={calendly ? "noreferrer" : undefined} className="btn-ghost has-arrow">
                Book a Strategy Call <Calendar size={16} className="arrow" />
              </a>

              <a href="#work" className="btn-neon has-arrow">
                View Case Studies <FolderKanban size={16} className="arrow" />
              </a>
            </motion.div>

            <p className="mt-5 text-sm text-slate-400">Trusted by growing teams across multiple industries.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.1 }}
            className="relative lg:col-span-5"
          >
            <div className="hero-visual rounded-[22px] p-6 md:p-8 min-h-[350px] md:min-h-[390px]">
              <div className="hero-silk" aria-hidden />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(94,230,255,.2),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(170,74,255,.25),transparent_48%)]" />
              <div className="relative z-10">
                <div className="text-sm font-semibold text-cyan-100/80">Live system pulse</div>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-[#091831]/70 px-3 py-1 text-xs text-slate-200">
                  <PlayCircle size={14} /> Watch AI Demo
                </div>
                <div className="mt-5 grid gap-3">
                  {[
                    "Revenue operations and workflows",
                    "AI-assisted monitoring and QA",
                    "Executive reporting dashboards",
                    "Conversion-focused digital systems",
                  ].map((item) => (
                    <div key={item} className="glass rounded-2xl p-4 text-slate-200/90">{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="hero-float-card mt-8 md:mt-10"
        >
          <div className="md:grid md:grid-cols-2 md:gap-8 items-start">
            <div>
              <div className="text-3xl font-extrabold leading-tight text-slate-100">Make your growth soar with the power of AI</div>
              <div className="mt-4 text-slate-200/90 text-sm leading-relaxed max-w-lg">
                Learn how to turn insights into measurable outcomes using intelligent workflows, real-time monitoring, and executive visibility.
              </div>
            </div>
            <div>
              <div className="mt-5 md:mt-0 grid gap-3 md:grid-cols-2">
                <input className="input" placeholder="First Name" />
                <input className="input" placeholder="Last Name" />
                <input className="input" placeholder="Job Title" />
                <input className="input" placeholder="Company" />
                <input className="input" placeholder="Business Email" />
                <input className="input" placeholder="Country" />
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={calendly || "#contact"} target={calendly ? "_blank" : undefined} rel={calendly ? "noreferrer" : undefined} className="btn-primary">
                  Watch on-demand
                </a>
              </div>
            </div>
          </div>
          <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-400">
            <Waves size={14} /> We typically respond within 24 hours.
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
