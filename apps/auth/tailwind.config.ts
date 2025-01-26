/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        link: 'rgb(var(--link))',
        'primary-button': 'rgb(var(--primary-button))',
      },
    },
  },
  plugins: [],
}
