/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        badges: "repeat(3, minmax(0, auto))",
      },
      boxShadow: {
        badgeInnerBorder: "0 0 0 1px",
      },
    },
  },
  plugins: [],
};
