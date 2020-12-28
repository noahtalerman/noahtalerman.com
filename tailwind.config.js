module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      sm: ['12px', '18px'],
      base: ['14px', '20px'],
      lg: ['16px', '24px'],
      xl: ['24px', '32px'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
