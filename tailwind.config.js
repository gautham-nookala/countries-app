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
        "primary-dark": "#1C122C",
        "primary-darker": "#000315",
        "gradient-start": "#6700E9",
        "gradient-end": "#D83AFF",
      },
      boxShadow: {
        card: "0px 10px 20px rgba(123, 137, 158, 0.08)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        assistant: ["Assistant", "sans-serif"],
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(to bottom right, var(--tw-gradient-stops))",
      },
      gradientColorStops: {
        "gradient-start": "#6700E9",
        "gradient-end": "#D83AFF",
      },
    },
  },
  plugins: [],
};
