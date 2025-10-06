/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0143A4',
          dark: '#023179',
          light: '#0156D4',
        },
        surface: {
          light: '#FCFDFF',
          lighter: '#DEE5EB',
        },
        neutral: {
          dark: '#3A383B',
          darker: '#1C1A1B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '28': '7rem',
      },
      maxWidth: {
        'content': '1200px',
      },
      animation: {
        'count-up': 'countUp 2s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        countUp: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
