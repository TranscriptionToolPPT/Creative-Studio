const particles = [
  { size: 8, left: "6%", delay: "0s", duration: "20s", blur: "0px", opacity: 0.45 },
  { size: 14, left: "14%", delay: "-5s", duration: "28s", blur: "1px", opacity: 0.35 },
  { size: 10, left: "22%", delay: "-9s", duration: "24s", blur: "1px", opacity: 0.42 },
  { size: 16, left: "31%", delay: "-2s", duration: "32s", blur: "2px", opacity: 0.3 },
  { size: 9, left: "40%", delay: "-12s", duration: "23s", blur: "0px", opacity: 0.4 },
  { size: 12, left: "48%", delay: "-6s", duration: "29s", blur: "1px", opacity: 0.36 },
  { size: 18, left: "56%", delay: "-14s", duration: "34s", blur: "2px", opacity: 0.25 },
  { size: 8, left: "63%", delay: "-8s", duration: "21s", blur: "0px", opacity: 0.48 },
  { size: 13, left: "70%", delay: "-4s", duration: "26s", blur: "1px", opacity: 0.35 },
  { size: 11, left: "77%", delay: "-16s", duration: "25s", blur: "1px", opacity: 0.38 },
  { size: 15, left: "84%", delay: "-7s", duration: "31s", blur: "2px", opacity: 0.3 },
  { size: 9, left: "92%", delay: "-11s", duration: "22s", blur: "0px", opacity: 0.45 },
]

export default function AnimatedBackdrop() {
  return (
    <div aria-hidden className="animated-backdrop">
      <div className="animated-backdrop__aurora" />
      <div className="animated-backdrop__dust" />
      <div className="animated-backdrop__particles">
        {particles.map((particle, idx) => (
          <span
            key={`${particle.left}-${idx}`}
            className="backdrop-dot"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              filter: `blur(${particle.blur})`,
              opacity: particle.opacity,
            }}
          />
        ))}
      </div>
    </div>
  )
}
