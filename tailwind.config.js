/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-text": "#9B9EAC",
        "column-text": "#202543",
      },
    },
  },
  plugins: [],
};
