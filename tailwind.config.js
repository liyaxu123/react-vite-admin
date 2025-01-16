/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1600px",
    },
    extend: {
      colors: {
        "color-bg-container": "var(--ant-color-bg-container)",
        "color-bg-elevated": "var(--ant-color-bg-elevated)",
      }
    },
  },
  plugins: [],
}

