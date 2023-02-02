/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'graybg': 'rgb(50, 58, 73)',
        'advc': 'rgb(206, 227, 233)',
        'greenish': 'rgb(82, 255, 168)',
        'btnc': 'rgb(82, 255, 168)',
      },
      transformOrigin: {
        'trans': 'translate(-50%, -50%)',
      }
    },
  },
  plugins: [],
}
