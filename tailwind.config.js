/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Corporate Identity Colors
        primary: {
          DEFAULT: '#a37f00',
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#a37f00',
          600: '#8b6b00',
          700: '#725700',
          800: '#5a4400',
          900: '#422f00',
        },
        dark: {
          DEFAULT: '#1b1b1b',
          lighter: '#2d2d2d',
          light: '#3d3d3d',
        },
        light: {
          DEFAULT: '#f2f2f2',
          dark: '#e5e5e5',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['"Crimson Text"', 'Georgia', 'serif'],
        body: ['"Crimson Text"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
