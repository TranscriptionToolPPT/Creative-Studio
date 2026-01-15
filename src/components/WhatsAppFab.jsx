import { SITE } from "../config.js"
import { MessageCircle } from "lucide-react"

export default function WhatsAppFab() {
  const whatsappLink = `https://wa.me/${SITE.whatsappNumber}`
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-2xl px-4 py-3 bg-[#0B1220] text-white shadow-soft hover:bg-[#111B33] transition active:scale-[0.98]"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={18} />
      <span className="text-sm font-semibold hidden sm:inline">WhatsApp</span>
    </a>
  )
}

