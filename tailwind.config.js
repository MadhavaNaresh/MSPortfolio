/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        panel: "#0b1728",
        line: "#21334d",
        accent: "#46d9ff",
        signal: "#7cf3b5"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "SFMono-Regular", "Consolas", "monospace"]
      },
      boxShadow: {
        glow: "0 0 50px rgba(70, 217, 255, 0.14)"
      }
    }
  },
  plugins: []
};
