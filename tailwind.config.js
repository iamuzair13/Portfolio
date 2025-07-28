/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Adjust based on your folder structure
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        royal: ['"Cinzel"', '"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};
