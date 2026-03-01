import { motion } from "framer-motion"
import Container from "./Container.jsx"
import { SITE } from "../config.js"
import { Sparkles, ArrowRight, Calendar, FolderKanban } from "lucide-react"

function Background() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="absolute top-32 -left-40 h-[520px] w-[520px] rounded-full bg-teal-200/24 blur-3xl" />
      <div className="absolute -bottom-64 -right-52 h-[640px] w-[640px] rounded-full bg-indigo-200/22 blur-3xl" />
      <div className="absolute inset-y-0 left-0 w-[32vw] bg-gradient-to-r from-sky-500/25 via-transparent to-transparent blur-2xl" />
      <div className="absolute inset-y-0 right-0 w-[32vw] bg-gradient-to-l from-indigo-500/25 via-transparent to-transparent blur-2xl" />
    </div>
  )
}

export default function Hero() {
  const calendly = SITE.calendly?.trim()

  return (
    <section className="relative pt-12 md:pt-16 noise">
      <Background />
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="badge">
              <Sparkles size={14} />
              AI & Digital Systems Studio
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl text-slate-900 leading-[1.05]"
            >
              We Build Revenue-Driven Digital Systems & AI Solutions.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
              className="mt-5 text-slate-700/85 max-w-2xl"
            >
              We design and develop intelligent digital products that increase performance, optimize operations, and drive measurable business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.16 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#contact" className="btn-primary">
                Start Your Project <ArrowRight size={16} />
              </a>

              <a href={calendly || "#contact"} target={calendly ? "_blank" : undefined} rel={calendly ? "noreferrer" : undefined} className="btn-ghost">
                Book a Strategy Call <Calendar size={16} />
              </a>

              <a href="#work" className="btn-whatsapp">
                View Case Studies <FolderKanban size={16} />
              </a>
            </motion.div>

            <p className="mt-5 text-sm text-slate-500/90">Trusted by growing teams across multiple industries.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.1 }}
            className="relative lg:col-span-5"
          >
            <div className="card relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-200/35 via-indigo-200/25 to-sky-300/35" />
              <div className="relative">
                <div className="text-sm font-extrabold text-slate-900">What we optimize</div>
                <div className="mt-5 grid gap-3">
                  {[
                    "Revenue operations and workflows",
                    "AI-assisted monitoring and QA",
                    "Executive reporting dashboards",
                    "Conversion-focused digital systems",
                  ].map((item) => (
                    <div key={item} className="glass rounded-2xl p-4 text-slate-700/90">{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
