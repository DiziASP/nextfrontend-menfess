// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'primary':'#c97b84',
        'secondary':'#41b3a3',
        'tertiary':'#70ABAF',
        'quartiary':'#E8A87C',
        'fifthiary':'#C38D9E',
        'fess':'#755C59',
        'background':'#FEFEFE',
        'text':'#6D5B56'
      },
      fontFamily: {
        'global' : ['Raleway', 'ui-sans-serif', 'system-ui'],
        'fess': ['SF Pro Display', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}