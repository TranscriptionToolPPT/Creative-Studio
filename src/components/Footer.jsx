import Container from "./Container.jsx"
import { SITE } from "../config.js"
import { Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-sky-200/60 py-10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-slate-500/80">
          © {new Date().getFullYear()} <span className="text-slate-700 font-semibold">{SITE.brand}</span>. All rights reserved.
          <span className="ml-2 text-slate-400/70">•</span>
          <a className="ml-2 text-slate-500/80 hover:text-slate-900 transition" href="#privacy">Privacy</a>
          <span className="ml-2 text-slate-400/70">•</span>
          <a className="ml-2 text-slate-500/80 hover:text-slate-900 transition" href="#terms">Terms</a>
        </div>

        <div className="flex items-center gap-3">
          <a className="btn-ghost" href={SITE.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram size={16} />
          </a>
          <a className="btn-ghost" href={SITE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
        </div>
      </Container>
    </footer>
  )
}

