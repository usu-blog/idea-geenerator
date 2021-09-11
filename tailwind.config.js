module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["'Roboto'", 'sans-serif'],
    },
    extend: {
      fontFamily: {
        display: ["'Original Surfer'", 'cursive'],
      },
      colors: {
        sub: '#7C6D55',
        back: '#FBF8F1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
