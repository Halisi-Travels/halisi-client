/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#002570",
        secondary: "#F98A16",
      },
    },
  },
  plugins: [],
};
