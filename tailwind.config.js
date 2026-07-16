/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#030712",
        panel: "#07111f",
        electric: "#38bdf8",
        cobalt: "#2563eb",
        frost: "#e5f4ff"
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 42px rgba(56,189,248,.28)"
      },
      backgroundImage: {
        "mesh": "radial-gradient(circle at 18% 16%, rgba(14,165,233,.22), transparent 32%), radial-gradient(circle at 82% 22%, rgba(37,99,235,.2), transparent 34%), radial-gradient(circle at 50% 85%, rgba(45,212,191,.12), transparent 32%)"
      }
    }
  },
  plugins: []
};
