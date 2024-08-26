/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Adjust the path according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        'light-gold': '#FFD700',
        'medium-gold': '#FFC300',
        'dark-gold': '#B8860B',
        'light-black': '#333333',
        'medium-black': '#1A1A1A',
        'dark-black': '#000000',
        'white': '#FFFFFF',
        'silver': '#C0C0C0',
        'dark-gray': '#4F4F4F',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fadeIn 8s ease-in-out',
      },
    },
  },
  plugins: [],
}

