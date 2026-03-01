import { motion } from "framer-motion"
import Container from "./Container.jsx"
import { LOGOS } from "../config.js"

const COLORS = [
  { ring: "ring-violet-400/40", bg: "bg-violet-500/10", grad: "from-violet-500 to-indigo-500" },
  { ring: "ring-fuchsia-400/40", bg: "bg-fuchsia-500/10", grad: "from-fuchsia-500 to-violet-500" },
  { ring: "ring-indigo-400/40", bg: "bg-indigo-500/10", grad: "from-indigo-500 to-violet-500" },
  { ring: "ring-violet-400/40", bg: "bg-violet-500/10", grad: "from-violet-500 to-fuchsia-500" },
  { ring: "ring-indigo-400/40", bg: "bg-indigo-500/10", grad: "from-indigo-500 to-violet-500" },
]

export default function LogosStrip() {
  return (
    <section className="py-10 md:py-12">
      <Container>
        <div className="card bg-[#120a26]/78">
          <div className="text-xs font-semibold text-violet-200/70">
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
                  className={`rounded-2xl p-4 flex items-center gap-3 justify-center border border-violet-300/20 ${c.bg}`}
                >
                  <div className={`h-10 w-10 rounded-2xl bg-gradient-to-br ${c.grad} text-white grid place-items-center font-extrabold shadow-soft ring-4 ${c.ring}`}>
                    {l.short}
                  </div>
                  <div className="text-sm font-semibold text-violet-100">{l.name}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

