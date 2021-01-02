module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'ui-light-grey': '#E0E0E0',
    },
    fontSize: {
      sm: ['12px', '18px'],
      base: ['20px', '30px'],
      lg: ['24px', '32px'],
      xl: ['32px', '48px'],
    },
    fontFamily: {
     'display': ['Cera CY', 'sans-serif'],
     'body': ['Spectral', 'serif'],
    },
    spacing: {
     sm: '8px',
     md: '24px',
     lg: '40px',
     xl: '80px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
