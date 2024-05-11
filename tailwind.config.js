module.exports = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'media',
  theme: {
    colors: {
      'ui-light-grey': '#e0e0e0',
      'red': '#f45d48',
      'dark-grey': '#1a1a1b',
      'dark-text-grey': '#b3b3b3',
      'light-text-grey': '#7c7c7c',
      'white': '#ffffff',
    },
    fontSize: {
      sm: ['12px', '18px'],
      md: ['18px', '27px'],
      base: ['20px', '30px'],
      lg: ['24px', '32px'],
      xl: ['32px', '48px'],
    },
    fontFamily: {
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
    extend: {}
  },
  plugins: [],
}
