import { motion } from "framer-motion"
import { SITE } from "../config.js"
import { Mail, Phone, MessageCircle, Send, Calendar } from "lucide-react"

export default function ContactBlock() {
  const whatsappLink = `https://wa.me/${SITE.whatsappNumber}`
  const calendly = SITE.calendly?.trim()

  function onSubmit(e) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = fd.get("name")?.toString() || ""
    const email = fd.get("email")?.toString() || ""
    const service = fd.get("service")?.toString() || ""
    const message = fd.get("message")?.toString() || ""

    const subject = encodeURIComponent(`[Website Inquiry] ${service} — ${name}`)
    const body = encodeURIComponent(`Name: ${name}
Email: ${email}
Service: ${service}

Message:
${message}`)
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grid gap-6 lg:grid-cols-12"
    >
      <div className="lg:col-span-5">
        <div className="card relative overflow-hidden h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-amber-400/10 to-rose-400/10" />
          <div className="relative">
            <div className="badge">Let’s work together</div>
            <h3 className="mt-4 text-2xl md:text-3xl font-extrabold tracking-tight">
              Want to Join the Craftive Family?
            </h3>
            <p className="mt-3 text-orange-50/85">
              Send a quick message and we’ll reply with a clear plan, timeline, and next steps.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer">
                WhatsApp <MessageCircle size={16} />
              </a>
              <a className="btn-ghost" href={`mailto:${SITE.email}`}>
                Email <Mail size={16} />
              </a>
              {calendly ? (
                <a className="btn-ghost" href={calendly} target="_blank" rel="noreferrer">
                  Book a Call <Calendar size={16} />
                </a>
              ) : null}
            </div>

            <div className="mt-8 grid gap-3">
              <div className="glass rounded-2xl p-4">
                <div className="flex items-center gap-2 text-sm font-bold"><Phone size={16} /> Phone</div>
                <div className="mt-2 text-orange-50/85">{SITE.phoneDisplay}</div>
              </div>
              <div className="glass rounded-2xl p-4">
                <div className="flex items-center gap-2 text-sm font-bold"><Mail size={16} /> Email</div>
                <div className="mt-2 text-orange-50/85">{SITE.email}</div>
              </div>
            </div>

            <div className="mt-8 text-xs text-orange-200/55">
              By contacting us, you agree to our basic privacy & communication terms.
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="card">
          <div className="text-lg font-extrabold">Send a message</div>
          <p className="mt-2 text-orange-50/85">No backend needed — it opens your email client with the details.</p>

          <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <div className="label mb-2">Your name</div>
                <input className="input" name="name" required placeholder="John Doe" />
              </div>
              <div>
                <div className="label mb-2">Email</div>
                <input className="input" name="email" type="email" required placeholder="john@company.com" />
              </div>
            </div>

            <div>
              <div className="label mb-2">Service</div>
              <select className="input" name="service" defaultValue="Website">
                <option>Website</option>
                <option>Mobile App</option>
                <option>UI/UX</option>
                <option>Dashboard</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <div className="label mb-2">Project details</div>
              <textarea className="textarea" name="message" required placeholder="Tell us what you need, your timeline, and any links..." />
            </div>

            <button className="btn-primary w-fit" type="submit">
              Send <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}

