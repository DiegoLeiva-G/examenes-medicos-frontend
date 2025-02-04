export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'sign-in': 'url("https://res.cloudinary.com/djpir2ory/image/upload/v1689080700/DJI_0026_s7zdmh.jpg")',
      },
      colors: {
        'primary-gradient-start': '#1B2631',
        'primary-gradient-end': '#283747',
        primary: {
          50: '#EBEDEF',
          100: '#D6DBDF',
          200: '#AEB6BF',
          300: '#85929E',
          400: '#5D6D7E',
          500: '#34495E',
          600: '#2E4053',
          700: '#283747',
          800: '#212F3C',
          900: '#1B2631',
          950: '#0C1117',
        },
      },
      screens: {
        plannerMdToLg: '955px',
        plannerLgToXl: '1200px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
