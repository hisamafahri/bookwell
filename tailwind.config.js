module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs': '360px'
      },
      fontFamily: {
        'josefin-sans': ["'Josefin Sans'", 'sans-serif'],
        'rubik': ["'Rubik'", 'sans-serif']
      },
      colors: {
        'bw-orange': '#FD6221',
        'bw-xl-grey': '#F2F2F2',
        'bw-light-grey': '#E8E8E8',
        'bw-dark-grey': '#C4C4C8',
        'bw-font-grey': '#858585',
        'bw-red': '#F5002D',
        'bw-green': '#65CB00',
        'bw-blue': '#00B4D8',
        'bw-white': '#FFFFFF',
        'bw-black': '#000000',
        'bw-hover-orange': '#FF7E47'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
