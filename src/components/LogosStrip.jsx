import { motion } from "framer-motion"
import Container from "./Container.jsx"
import { LOGOS } from "../config.js"

const COLORS = [
  { ring: "ring-sky-500/40", bg: "bg-sky-100", grad: "from-teal-500 to-indigo-500" },
  { ring: "ring-teal-500/40", bg: "bg-teal-500/10", grad: "from-teal-500 to-sky-500" },
  { ring: "ring-indigo-400/40", bg: "bg-indigo-500/10", grad: "from-indigo-500 to-sky-500" },
  { ring: "ring-sky-500/40", bg: "bg-sky-100", grad: "from-sky-500 to-teal-500" },
  { ring: "ring-indigo-400/40", bg: "bg-indigo-500/10", grad: "from-indigo-500 to-sky-500" },
]

export default function LogosStrip() {
  return (
    <section className="py-10 md:py-12">
      <Container>
        <div className="card bg-[#ffffff]/46">
          <div className="text-xs font-semibold text-slate-500/80">
            Trusted by teams building modern products (sample logos)
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {LOGOS.map((l, idx) => {
              const c = COLORS[idx % COLORS.length]
              return (
                <motion.div
                  key={l.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.04 }}
                  className={`rounded-2xl p-4 flex items-center gap-3 justify-center border border-sky-200/60 ${c.bg}`}
                >
                  <div className={`h-10 w-10 rounded-2xl bg-gradient-to-br ${c.grad} text-slate-900 grid place-items-center font-extrabold shadow-soft ring-4 ${c.ring}`}>
                    {l.short}
                  </div>
                  <div className="text-sm font-semibold text-slate-700">{l.name}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

