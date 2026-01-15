/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'ui-sans-serif','system-ui','Inter','Segoe UI','Roboto','Helvetica','Arial',
          'Apple Color Emoji','Segoe UI Emoji'
        ],
      },
      keyframes: {
        floaty: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-10px)' } },
        shimmer: { '0%': { backgroundPosition: '0% 50%' }, '100%': { backgroundPosition: '100% 50%' } },
        pulseGlow: { '0%, 100%': { opacity: 0.25 }, '50%': { opacity: 0.55 } }
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 8s ease-in-out infinite',
        pulseGlow: 'pulseGlow 6s ease-in-out infinite',
      },
      boxShadow: { soft: '0 20px 80px rgba(0,0,0,0.25)' }
    },
  },
  plugins: [],
}
