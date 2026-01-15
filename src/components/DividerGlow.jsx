export default function DividerGlow() {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 -top-10 h-28 bg-gradient-to-r from-orange-400/0 via-amber-400/40 to-rose-400/0 blur-2xl animate-pulseGlow" />
      <div className="h-px w-full bg-black/5" />
    </div>
  )
}

