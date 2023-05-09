/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding:'1%'
    },
    extend: {
      colors: {
      'white': '#ffffff',
      primary:'#1e3a8a',
      dark_green:'#476072',
      dark_blue:'#334257',
      black:'#0a0a0a'
    },
    screens: {
      '2xl':'1320px',
    }
  },
    
  },
  plugins: [],
}

