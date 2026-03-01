import { motion } from "framer-motion"
import { Code2, Smartphone, Palette, Wrench } from "lucide-react"

const services = [
  { icon: Code2, title: "Web Development", desc: "High-performance websites built for speed, clarity, and conversion." },
  { icon: Smartphone, title: "Mobile Applications", desc: "iOS & Android apps with smooth UX and modern architecture." },
  { icon: Palette, title: "UI / UX Design", desc: "Interfaces that feel natural, clean, and intuitive." },
  { icon: Wrench, title: "Custom Solutions", desc: "Tailored digital products for startups and growing businesses." },
]

export default function ServicesGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {services.map((s, idx) => {
        const Icon = s.icon
        return (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut", delay: idx * 0.05 }}
            className="card group hover:bg-sky-100 transition"
          >
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-sky-500/60 via-teal-500/45 to-indigo-400/35 grid place-items-center shadow-soft">
                <Icon size={20} />
              </div>
              <div>
                <div className="text-lg font-bold">{s.title}</div>
                <p className="mt-2 text-slate-700/85">{s.desc}</p>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

