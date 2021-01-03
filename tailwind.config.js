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
    screend: {
    'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
