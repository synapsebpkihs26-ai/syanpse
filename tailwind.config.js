/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#080808",
        ember: {
          50: "#fff7ed",
          200: "#fed7aa",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
        },
        magenta: "#ec4899",
        plasma: "#9333ea",
        midnight: "#0b0c14",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        ember: "0 10px 40px rgba(249,115,22,0.35)",
        glass: "0 24px 80px rgba(0,0,0,0.55)",
      },
      backgroundImage: {
        aurora:
          "radial-gradient(900px circle at 15% 18%, rgba(249,115,22,0.25), transparent 45%), radial-gradient(1000px circle at 90% 8%, rgba(147,51,234,0.18), transparent 40%), radial-gradient(1200px circle at 50% 88%, rgba(236,72,153,0.18), transparent 55%)",
        rings:
          "radial-gradient(circle at 20% 20%, rgba(249,115,22,0.2), transparent 25%), radial-gradient(circle at 80% 10%, rgba(147,51,234,0.15), transparent 22%), radial-gradient(circle at 50% 80%, rgba(236,72,153,0.12), transparent 32%)",
      },
    },
  },
  plugins: [],
};
