// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'primary' : "#35978c",
        'secondary' : "#0A405C",
        'tertiary' :'#0C3F5A',
        'quartiary':'#dbabbe'
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