import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const impacts = [
  { value: 4, suffix: "×", label: "Faster QA Review Process" },
  { value: 80, suffix: "%", label: "Reduction in Manual Monitoring" },
  { value: 100, suffix: "%", label: "Automated Script Compliance Detection" },
  { value: 24, suffix: "/7", label: "Real-Time Operational Visibility" },
  { value: 32, suffix: "%", label: "Increased Customer Retention Insights" },
]

function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let frame
    const duration = 1200
    const started = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - started) / duration, 1)
      setCount(Math.round(target * progress))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target])

  return <span>{count}{suffix}</span>
}

export default function ImpactSection() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
      {impacts.map((item, idx) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.04 }}
          className="card"
        >
          <div className="text-3xl font-black bg-gradient-to-r from-orange-200 to-rose-200 bg-clip-text text-transparent">
            <Counter target={item.value} suffix={item.suffix} />
          </div>
          <div className="mt-3 text-sm text-orange-50/85 leading-relaxed">{item.label}</div>
        </motion.div>
      ))}
    </div>
  )
}
