import { motion } from "framer-motion"
import { PROJECTS } from "../config.js"
import { ArrowUpRight } from "lucide-react"

export default function WorkGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {PROJECTS.map((p, idx) => (
        <motion.article
          key={p.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: idx * 0.06 }}
          className="card overflow-hidden group"
        >
          <div className="relative h-44 overflow-hidden rounded-2xl border border-violet-300/20 bg-violet-500/10">
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              className="h-full w-full object-cover opacity-90 group-hover:scale-[1.05] transition duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10]/85 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <div className="badge">{p.category}</div>
              <div className="badge">Preview</div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-lg font-extrabold tracking-tight">{p.title}</h3>
            <p className="mt-2 text-violet-100/80">{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs rounded-full px-3 py-1 bg-violet-500/10 border border-violet-300/20 text-violet-100/80">
                  {t}
                </span>
              ))}
            </div>

            <a href={p.link || "#contact"} className="mt-6 inline-flex items-center gap-2 text-sm text-violet-100/80 group-hover:text-white transition">
              View details <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.article>
      ))}
    </div>
  )
}

