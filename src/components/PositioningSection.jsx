import { motion } from "framer-motion"
import { BrainCircuit, BarChart3, Gauge, Cog, LayoutDashboard } from "lucide-react"

const pillars = [
  { icon: BarChart3, text: "Business-first approach (Not just design)" },
  { icon: BrainCircuit, text: "AI-powered automation solutions" },
  { icon: Gauge, text: "Performance-focused development" },
  { icon: Cog, text: "Operational optimization mindset" },
  { icon: LayoutDashboard, text: "Executive-level dashboards & insights" },
]

export default function PositioningSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {pillars.map((item, idx) => {
        const Icon = item.icon
        return (
          <motion.div
            key={item.text}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.05 }}
            className="card"
          >
            <div className="flex items-start gap-3">
              <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-violet-500/80 to-indigo-500/75 grid place-items-center shadow-soft">
                <Icon size={18} />
              </div>
              <p className="text-violet-100/85 font-medium leading-relaxed">{item.text}</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
