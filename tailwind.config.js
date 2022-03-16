module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(to top, rgba(14 165 233 / 0.9), rgba(14 165 233 / 0.1)), url('/bg.jpg')",
     },
    },
  },
  plugins: [],
}
