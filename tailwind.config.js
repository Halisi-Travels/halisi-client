/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";
import aspectRatio from "@tailwindcss/aspect-ratio";

module.exports = {
  content: ["./index.html", "./src/**/*.{vue, js, ts, jsx, tsx}"],
  purge: ["./index.html", "./src/**/*.{vue, js, ts, jsx, tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#002570",
        secondary: "#F98A16",
      },
    },
  },
  plugins: [typography, forms, aspectRatio],
};
