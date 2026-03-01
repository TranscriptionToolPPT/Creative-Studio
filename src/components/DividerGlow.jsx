export default function DividerGlow() {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 -top-10 h-28 bg-gradient-to-r from-violet-500/0 via-fuchsia-500/45 to-indigo-500/0 blur-2xl animate-pulseGlow" />
      <div className="h-px w-full bg-violet-500/10" />
    </div>
  )
}

