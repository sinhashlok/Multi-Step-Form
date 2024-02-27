/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntuN: ["Ubuntu-normal", "sans-serif"],
        ubuntuM: ["Ubuntu-medium", "sans-serif"],
        ubuntuD: ["Ubuntu-bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
