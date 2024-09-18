/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#00FFF0",
        secondary: "#430098",
        interaction: "#FF44E1",
        background: "#0E172A",
      },
      padding: {
        desktop: "5vw 40px",
        mobile: "24px",
      },
    },
  },
  plugins: [],
};
