/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#374785",
          100: "#A8D0E6",
        },
        navy: "#24305E",
        pink: "#F76C6C",
        white: "#FEFFFF",
        yellow: "#F8E9A1",
        silver: "#C0C0C0",
      },
    },
  },
  plugins: [],
};
