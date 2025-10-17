module.exports = {
  purge: ['./*.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#fdf6ec',
          100: '#f7eddc',
        },
        gold: {
          50: '#fef9e7',
          500: '#d4af37',
        },
        red: {
          800: '#8B0000',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
};
