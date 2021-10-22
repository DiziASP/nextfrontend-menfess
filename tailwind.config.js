// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'primary':'#e27d60',
        'secondary':'#41b3a3',
        'tertiary':'#70ABAF',
        'quartiary':'#E8A87C',
        'fifthiary':'#C38D9E',
      },
      fontFamily: {
        'global' : ['Raleway', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}