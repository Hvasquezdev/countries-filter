module.exports = {
  purge: [],
  theme: {
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1380px',
      hd: '1920px'
    },
    fontFamily: {
      display: ['Nunito', 'sans-serif'],
      body: ['Nunito', 'sans-serif'],
    },
    borderRadius: {
      'none': '0',
      default: '8px',
    },
    extend: {
      colors: {
        'color-1': 'hsl(209, 23%, 22%)', // - color-1 (Dark Mode Elements): hsl(209, 23%, 22%)
        'color-2': 'hsl(207, 26%, 17%)', // - color-2 (Dark Mode Background): hsl(207, 26%, 17%)
        'color-3': 'hsl(200, 15%, 8%)', // - color-3 (Light Mode Text): hsl(200, 15%, 8%)
        'color-4': 'hsl(0, 0%, 52%)', // - color-4 (Light Mode Input): hsl(0, 0%, 52%)
        'color-5': 'hsl(0, 0%, 98%)', // - color-5 (Light Mode Background): hsl(0, 0%, 98%)
        'color-6': 'hsl(0, 0%, 100%)' // - color-6 (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)
      }
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  }
}
