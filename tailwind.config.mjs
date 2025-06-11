/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'aegean': {
          DEFAULT: '#1e3d59',
          dark: '#2d5175'
        }
      },
      boxShadow: {
        'pedestal': 'inset 0 0 20px rgba(0, 0, 0, 0.1)',
        'pedestal-top': 'inset 0 2px 10px rgba(0, 0, 0, 0.1)',
        'pedestal-bottom': 'inset 0 -2px 10px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'gradient-aegean': 'linear-gradient(135deg, #1e3d59, #2d5175)',
        'fluting': 'repeating-linear-gradient(90deg, #fff 0px, #fff 5px, #f5f5f5 5px, #f5f5f5 10px)'
      }
    }
  },
  plugins: [],
} 