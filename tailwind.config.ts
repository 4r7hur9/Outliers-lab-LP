/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#646cff",
        "primary-hover": "#535bf2",
        secondary: "#40e0d0",
        "dark-bg": "#1a1a2e",
        "dark-secondary": "#16213e",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #646cff, #40e0d0)",
        "gradient-dark": "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
      },
    },
  },
  plugins: [],
};
