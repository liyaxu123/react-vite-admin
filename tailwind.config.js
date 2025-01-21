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
        "box-shadow": "var(--ant-box-shadow)",
        "color-border": "var(--ant-color-border)",
        "color-split": "var(--ant-color-split)",
        "color-border-secondary": "var(--ant-color-border-secondary)",
        "color-bg-base": "var(--ant-color-bg-base)",
        "color-text-base": "var(--ant-color-text-base)",
        "color-bg-container": "var(--ant-color-bg-container)",
        "color-bg-elevated": "var(--ant-color-bg-elevated)",
      }
    },
  },
  plugins: [],
}

