/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./frontend/src/pages/**/*.{js,ts,jsx,tsx}",
    "./frontend/src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: '#001f3f',
      },
    },
  },
  plugins: [],
}

