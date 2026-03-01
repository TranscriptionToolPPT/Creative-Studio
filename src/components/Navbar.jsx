import { motion } from "framer-motion"
import { SITE } from "../config.js"
import { ArrowUpRight } from "lucide-react"
import Container from "./Container.jsx"

const links = [
  { label: "Why Us", href: "#positioning" },
  { label: "Impact", href: "#impact" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="sticky top-0 z-50"
    >
      {/* Top bar */}
      <div className="border-b border-cyan-200/35 bg-[#0b1220]/55 backdrop-blur-xl">
        <Container className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-500 shadow-soft" />
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-tight text-white">{SITE.brand}</div>
              <div className="text-[11px] text-slate-100/70">{SITE.location}</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-slate-100/85 hover:text-white transition"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary" aria-label="Join the family">
              Start Your Project <ArrowUpRight size={16} />
            </a>
          </nav>

          <a href="#contact" className="lg:hidden btn-primary">
            Contact
          </a>
        </Container>
      </div>
    </motion.header>
  )
}

