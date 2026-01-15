export default function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-screen-2xl px-6 md:px-10 ${className}`}>
      {children}
    </div>
  )
}

