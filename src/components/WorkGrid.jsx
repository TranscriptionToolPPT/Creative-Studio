import { motion } from "framer-motion"
import { PROJECTS } from "../config.js"
import { ArrowUpRight, CircleCheckBig } from "lucide-react"

const outcomes = [
  "Reduced reporting delays with automated workflows.",
  "Improved team visibility on key operational KPIs.",
  "Created reusable systems to support faster growth.",
]

export default function WorkGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {PROJECTS.map((p, idx) => (
        <motion.article
          key={p.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: idx * 0.06 }}
          className="card overflow-hidden"
        >
          <div className="relative h-44 overflow-hidden rounded-2xl border border-cyan-300/20 bg-cyan-500/10">
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              className="h-full w-full object-cover opacity-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10]/85 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <div className="badge">{p.category}</div>
              <div className="badge">Case Study</div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-lg font-extrabold tracking-tight">{p.title}</h3>
            <p className="mt-2 text-slate-200/85">{p.description}</p>

            <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-500/10 p-4">
              <div className="text-xs font-bold uppercase tracking-wide text-cyan-200/80">Challenge</div>
              <p className="mt-2 text-sm text-slate-200/85">Need for clearer data visibility and faster team execution across the product lifecycle.</p>

              <div className="mt-4 text-xs font-bold uppercase tracking-wide text-cyan-200/80">Solution</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full px-3 py-1 bg-cyan-500/10 border border-cyan-300/20 text-slate-200/85">{t}</span>
                ))}
              </div>

              <div className="mt-4 text-xs font-bold uppercase tracking-wide text-cyan-200/80">Outcomes</div>
              <ul className="mt-2 space-y-2">
                {outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-sm text-slate-200/85">
                    <CircleCheckBig size={14} className="mt-0.5" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a href={p.link || "#contact"} className="mt-6 inline-flex items-center gap-2 text-sm text-slate-200/85 hover:text-white transition">
              View full case study <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.article>
      ))}
    </div>
  )
}
