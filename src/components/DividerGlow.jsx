export default function DividerGlow() {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 -top-10 h-28 bg-gradient-to-r from-orange-500/0 via-amber-500/45 to-rose-500/0 blur-2xl animate-pulseGlow" />
      <div className="h-px w-full bg-orange-400/15" />
    </div>
  )
}

