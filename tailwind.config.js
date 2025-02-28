/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-text": "#9B9EAC",
        "column-text": "#202543",
        "app-bg": "#F1F2F6",
        "heading-color": "#2D124C",
        "subtitle-color": "#6B6374",
      },
      borderRadius: {
        xl: "20px",
      },
      boxShadow: {
        card: "0px 10px 20px 0px rgba(123, 137, 158, 0.08)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        assistant: ["Assistant", "sans-serif"],
      },
    },
  },
  plugins: [],
};
