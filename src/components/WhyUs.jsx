import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const items = [
  "Clean & modern design language",
  "Performance-focused code & SEO basics",
  "Mobile-first, responsive layouts",
  "Clear communication & quick iterations",
  "Built for real users (not just visuals)",
]

export default function WhyUs() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="card"
      >
        <div className="text-lg font-extrabold">Why choose us?</div>
        <p className="mt-2 text-slate-100/85">
          Premium design, clean implementation, and a smooth experience from idea to launch.
        </p>

        <div className="mt-6 space-y-3">
          {items.map((x) => (
            <div key={x} className="flex items-start gap-3 text-slate-100">
              <CheckCircle2 size={18} className="mt-0.5" />
              <div>{x}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
        className="card relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-cyan-400/10 to-emerald-400/10" />
        <div className="relative">
          <div className="text-lg font-extrabold">What you get</div>
          <p className="mt-2 text-slate-100/85">
            A production-ready build with modern tooling, plus a structure that’s easy to extend later.
          </p>

          <div className="mt-6 grid gap-3">
            <div className="glass rounded-2xl p-4">
              <div className="text-sm font-bold">Fast Launch</div>
              <div className="text-xs text-slate-100/70 mt-1">Clean landing page + deploy-ready build.</div>
            </div>
            <div className="glass rounded-2xl p-4">
              <div className="text-sm font-bold">Easy Editing</div>
              <div className="text-xs text-slate-100/70 mt-1">Update brand/phone/email in one file.</div>
            </div>
            <div className="glass rounded-2xl p-4">
              <div className="text-sm font-bold">Modern Animations</div>
              <div className="text-xs text-slate-100/70 mt-1">Smooth motion without being heavy.</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

