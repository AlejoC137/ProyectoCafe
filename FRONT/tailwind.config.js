/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Bobby_Jones_Soft': ['Bobby_Jones_Soft', 'sans-serif']
      },
      fontSize: {
        '15pt': '15pt', // Add this line
        '12pt': '15pt', // Add this line
        '10pt': '10pt', // Add this line
      },
      colors:{
        pureRed: '#ff0000',
        lilaDark: '#5B7ABB',
        ladrillo: '#e3a18b',
        // ladrillo: '#e2b6aa',
        greenish: '#95bcbe',
        softGrey: '#d8d7d6',
        notBlack: '#2d2823',
        cream: '#f9e6c7',
      }
    },
  },
  plugins: [],
}
