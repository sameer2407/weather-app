/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryPurple: "#6c64fb",
        lightPurple: "#748cf1",
        darkPurple: "#24142c",
        dustyRose: "#9e616b",
        paleBlue: "#abaed3",
        darkSlate: "#3e3b51",
        lightGray: "#E5E5E5",
      },
    },
  },
  plugins: [],
};
