import { motion } from "framer-motion"
import Container from "./Container.jsx"
import { Play, ChevronRight } from "lucide-react"

const trackItems = [
  "Introduction Video",
  "Customer Satisfaction",
  "Sales Effectiveness",
  "Complaint Management",
]

export default function LogosStrip() {
  return (
    <section className="py-10 md:py-12">
      <Container>
        <div className="text-4xl font-bold tracking-tight text-slate-100 mb-5">Experience Our AI Studio</div>

        <div className="grid gap-5 lg:grid-cols-12">
          <div className="lg:col-span-7 card p-0 overflow-hidden">
            <div className="relative h-[300px] w-full bg-[linear-gradient(120deg,#2f4fff_0%,#30c8ff_100%)]">
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,white,transparent_30%),radial-gradient(circle_at_80%_70%,#6f4dff,transparent_35%)]" />
              <div className="absolute inset-0 grid place-items-center text-white">
                <button className="h-20 w-20 rounded-full border border-white/70 bg-white/10 backdrop-blur-md grid place-items-center hover:scale-105 transition">
                  <Play size={34} fill="white" />
                </button>
              </div>
            </div>
            <div className="p-5 text-slate-300/90 flex flex-wrap items-center justify-between gap-3">
              <p className="max-w-sm text-sm">Until now, measuring human behavior at scale to enhance CX was impossible. Now it is.</p>
              <a href="#contact" className="inline-flex items-center gap-2 text-cyan-200 hover:text-cyan-100 transition">Contact an expert <ChevronRight size={16} /></a>
            </div>
          </div>

          <div className="lg:col-span-5 grid gap-3">
            {trackItems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="card !p-4 border border-cyan-300/30"
              >
                <div className="flex items-center gap-3 text-slate-100">
                  <div className="h-8 w-8 rounded-full border border-cyan-300/50 grid place-items-center">
                    <ChevronRight size={14} />
                  </div>
                  <span>{item}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
