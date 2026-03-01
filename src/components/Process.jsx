import { motion } from "framer-motion"
import { Search, PenTool, Code2, Rocket } from "lucide-react"

const steps = [
  { icon: Search, title: "Discover", desc: "We clarify goals, audience, and scope. No fluff — just what matters." },
  { icon: PenTool, title: "Design", desc: "Clean UI/UX with a premium look. We align quickly through iterations." },
  { icon: Code2, title: "Build", desc: "Modern stack, responsive layout, smooth animations, and performance basics." },
  { icon: Rocket, title: "Launch", desc: "Deploy-ready build + post-launch support to keep things running right." },
]

export default function Process() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, idx) => {
        const Icon = s.icon
        return (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut", delay: idx * 0.05 }}
            className="card hover:bg-cyan-500/10 transition"
          >
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-500/60 via-cyan-400/40 to-emerald-400/30 grid place-items-center shadow-soft">
              <Icon size={20} />
            </div>
            <div className="mt-4 text-lg font-extrabold">{idx + 1}. {s.title}</div>
            <p className="mt-2 text-slate-200/85">{s.desc}</p>
          </motion.div>
        )
      })}
    </div>
  )
}

