import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: [
    './src/**/*.{js,html}'
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', ...defaultTheme.fontFamily.sans],
        cardo: ['Cardo', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        h1: '4rem',
        h2: '3rem',
        h3: '2rem',
        h4: '1.5rem',
        h5: '1.25rem',
        h6: '1rem',
        h7: '0.875rem',
        body1: '1.5rem',
        body2: '1.125rem',
        body3: '0.875rem',
        body4: '0.75rem',
      },
      fontWeight: {
        bold: '700',
        regular: '400',
      },
      colors: {
        black: '#20231E',
        grey: {
          1: '#83889C',
          2: '#F8F7F8',
          3: '#E0E0E5'
        },
        white: '#FFFFFF',
        dark: '#6D4C41',
        red: '#EF5A6F',
        yellow: '#FFEB68',
        blue: '#017AFF',
        green: '#29C7AC',
      },
    },
  },
}
