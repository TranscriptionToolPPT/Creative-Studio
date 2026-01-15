import { motion } from "framer-motion"
import Container from "./Container.jsx"
import { SITE } from "../config.js"
import { Sparkles, ArrowDown, Code2, Smartphone, MessageCircle, Calendar, ShieldCheck } from "lucide-react"

function Background() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Soft cheerful blobs */}
      <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-orange-300/45 blur-3xl" />
      <div className="absolute top-32 -left-40 h-[520px] w-[520px] rounded-full bg-rose-300/35 blur-3xl" />
      <div className="absolute -bottom-64 -right-52 h-[640px] w-[640px] rounded-full bg-amber-200/45 blur-3xl" />

      {/* Edge wash to avoid empty sides on wide screens */}
      <div className="absolute inset-y-0 left-0 w-[32vw] bg-gradient-to-r from-orange-200/45 via-transparent to-transparent blur-2xl" />
      <div className="absolute inset-y-0 right-0 w-[32vw] bg-gradient-to-l from-rose-200/40 via-transparent to-transparent blur-2xl" />
    </div>
  )
}

function Stat({ title, value }) {
  return (
    <div className="glass rounded-2xl px-4 py-3">
      <div className="text-[11px] text-slate-600">{title}</div>
      <div className="mt-1 text-sm font-extrabold text-slate-900">{value}</div>
    </div>
  )
}


function PreviewImage({ src, alt }) {
  return (
    <div className="mt-4 h-28 w-full overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
      />
    </div>
  )
}

export default function Hero() {

  const whatsappLink = `https://wa.me/${SITE.whatsappNumber}`
  const calendly = SITE.calendly?.trim()

  return (
    <section className="relative pt-12 md:pt-16 noise">
      <Background />
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left */}
          <div className="lg:col-span-6">
            <div className="badge">
              <Sparkles size={14} />
              Premium Digital Studio
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl text-slate-900 leading-[1.05]"
            >
              We Build Digital Experiences{" "}
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600 bg-clip-text text-transparent">
                People Love.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
              className="mt-5 text-slate-700 max-w-xl"
            >
              Websites, Mobile Apps & Digital Products crafted with precision — fast, modern, and built with real users in mind.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.16 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#work" className="btn-primary">
                View Our Work <ArrowDown size={16} />
              </a>

              <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-whatsapp">
                WhatsApp <MessageCircle size={16} />
              </a>

              {calendly ? (
                <a href={calendly} target="_blank" rel="noreferrer" className="btn-ghost">
                  Book a Call <Calendar size={16} />
                </a>
              ) : (
                <a href="#contact" className="btn-ghost">Get a Quote</a>
              )}
            </motion.div>

            <div className="mt-7 flex flex-wrap gap-3 text-xs text-slate-700">
              <span className="badge"><Code2 size={14}/>Web</span>
              <span className="badge"><Smartphone size={14}/>Mobile</span>
              <span className="badge">UI/UX</span>
              <span className="badge">Performance</span>
              <span className="badge"><ShieldCheck size={14}/>Reliable Delivery</span>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 max-w-xl">
              <Stat title="Typical delivery" value="7–14 days" />
              <Stat title="Iterations included" value="2–3 rounds" />
              <Stat title="Support" value="Post-launch help" />
            </div>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.1 }}
            className="relative lg:col-span-6"
          >
            <div className="card relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200/60 via-amber-100/40 to-rose-200/45" />
              <div className="absolute -top-14 -right-14 h-44 w-44 rounded-[3rem] bg-white/60 border border-black/10 backdrop-blur-xl" />
              <div className="absolute -bottom-14 -left-14 h-40 w-40 rounded-[3rem] bg-gradient-to-br from-orange-300/70 via-amber-200/55 to-rose-200/60 blur-[1px] opacity-70" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-extrabold text-slate-900">Featured Projects</div>
                  <div className="text-xs text-slate-600">Preview</div>
                </div>

                <div className="mt-6 grid gap-5">
                  <div className="glass rounded-3xl p-5 bg-white/75">
                    <div className="text-xs text-slate-600">Mobile App</div>
                    <div className="mt-2 flex items-end justify-between">
                      <div className="text-lg font-extrabold text-slate-900">FinFlow</div>
                      <div className="text-xs text-slate-600">v1.0</div>
                    </div>
                    <PreviewImage src="/previews/finflow.png" alt="FinFlow app preview" />
                  </div>

                  <div className="glass rounded-3xl p-5 bg-white/75">
                    <div className="text-xs text-slate-600">Website</div>
                    <div className="mt-2 flex items-end justify-between">
                      <div className="text-lg font-extrabold text-slate-900">LumenCorp</div>
                      <div className="text-xs text-slate-600">Landing</div>
                    </div>
                    <PreviewImage src="/previews/lumencorp.png" alt="LumenCorp website preview" />
                  </div>

                  <div className="glass rounded-3xl p-5 bg-white/75">
                    <div className="text-xs text-slate-600">Dashboard</div>
                    <div className="mt-2 flex items-end justify-between">
                      <div className="text-lg font-extrabold text-slate-900">PulseBoard</div>
                      <div className="text-xs text-slate-600">SaaS</div>
                    </div>
                    <PreviewImage src="/previews/pulseboard.png" alt="PulseBoard dashboard preview" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 md:mt-12 pb-6">
          <a href="#about" className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 transition">
            Scroll to learn more <ArrowDown size={16} />
          </a>
        </div>
      </Container>
    </section>
  )
}

