import { motion } from "framer-motion"
import Container from "./Container.jsx"
import { LOGOS } from "../config.js"

const COLORS = [
  { ring: "ring-orange-400/40", bg: "bg-orange-400/15", grad: "from-amber-400 to-rose-500" },
  { ring: "ring-amber-400/40", bg: "bg-amber-500/10", grad: "from-amber-500 to-orange-500" },
  { ring: "ring-rose-400/40", bg: "bg-rose-500/10", grad: "from-rose-500 to-orange-500" },
  { ring: "ring-orange-400/40", bg: "bg-orange-400/15", grad: "from-orange-500 to-amber-500" },
  { ring: "ring-rose-400/40", bg: "bg-rose-500/10", grad: "from-rose-500 to-orange-500" },
]

export default function LogosStrip() {
  return (
    <section className="py-10 md:py-12">
      <Container>
        <div className="card bg-[#2a1a0f]/46">
          <div className="text-xs font-semibold text-orange-100/70">
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
                  className={`rounded-2xl p-4 flex items-center gap-3 justify-center border border-orange-200/35 ${c.bg}`}
                >
                  <div className={`h-10 w-10 rounded-2xl bg-gradient-to-br ${c.grad} text-white grid place-items-center font-extrabold shadow-soft ring-4 ${c.ring}`}>
                    {l.short}
                  </div>
                  <div className="text-sm font-semibold text-orange-50">{l.name}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

