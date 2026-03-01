import { motion } from "framer-motion"
import { TESTIMONIALS } from "../config.js"
import { Quote } from "lucide-react"

export default function Testimonials() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {TESTIMONIALS.map((t, idx) => (
        <motion.figure
          key={t.quote}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: idx * 0.06 }}
          className="card"
        >
          <div className="flex items-center justify-between">
            <div className="badge"><Quote size={14}/> Review</div>
            <div className="text-xs text-orange-200/55">★★★★★</div>
          </div>
          <blockquote className="mt-5 text-orange-50 leading-relaxed">“{t.quote}”</blockquote>
          <figcaption className="mt-6 text-sm">
            <div className="font-extrabold">{t.name}</div>
            <div className="text-orange-100/70">{t.company}</div>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  )
}

