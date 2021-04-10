module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.vue','./src/*.vue',],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'custome_bg':'linear-gradient(45deg,#00dbde,#fc00ff)'
      },
      colors:{
        'custom_blue':'#250933',
        'custom_brown':'#212529 '
      },
      "fontFamily":{
        'custom_font':"Poppins"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
