/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#FFC727",
        "dark": "#111111",
        "burnt-umber": "#8B4513",
        "dark-brown": "#4B3621",
        "light-brown": "#D2B48C",
        "cream": "#FFFDD0",
        'rich-earth-brown': '#5A351D',
        'sunset-orange': '#F29C46',
        'deep-clay-brown': '#8B4D2C',
        'burnt-umber': '#6E4028',
        'golden-orange': '#FFB84D',
        'warm-beige': '#F6E8D6',
        'light-green': '#9DC88D',
        'card-bg': '#FFF7EF',
        'muted-green': '#9DB59E'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        }
      }
    },
  },
  plugins: [],
}

