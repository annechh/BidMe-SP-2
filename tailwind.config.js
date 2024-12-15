/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './pages/**/*.{html,js}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        softGreen: '#8CF474',
        warmYellow: '#FFC368',
        skyBlue: '#79C6F3',
        delete: '#FF7B7B',

        darkBG: '#181818',
        whiteFaded: 'rgba(255, 255, 225, 0.25)',
        darkFaded: 'rgba(0, 0, 0, 0.25)',
      },
      dropShadow: {
        darkFaded: '0 5px 10px rgba(0, 0, 0, 0.25)',
        yellow: '0 5px 10px rgba(255, 195, 104, 1)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
