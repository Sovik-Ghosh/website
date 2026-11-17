/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: "#05070B",
        ink: "#E8EDF2",
        mute: "#8A94A6",
        lime: { DEFAULT: "#76B900", soft: "#C8F27A" },
        cyan: { DEFAULT: "#22D3EE" },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      screens: { xs: "480px" },
    },
  },
  plugins: [],
};
