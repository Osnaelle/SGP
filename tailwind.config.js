/** @type {import('tailwindcss').Config} */
export default {

    content: ['./src/**/*.tsx', './index.html'],

  theme: {

    extend:{
      fontFamily: {
        inter: ["Inter"]
      },
      
        fontSize: {
          'sidebar': '16px',
        },
        fontWeight: {
          'sidebar': 'normal',
        },
        textColor: {
          'sidebar': 'text-black-100',
      },
       colors: {
         white: {
           100: "##FFF",
           200:'#F7F7F7'
         },

      primary:{
          100:'#5570F1',
          200:'#5B6EC6'

        },
        green:{
          100:'#32936F',
          200:'#458B71',
          300:'#76AA94', //surface primary
           400:'#C6DBD2'  //surface secondary
        },
        red:{ //danger
          100:'#F57E77',
          200:'#C95F58'

        },
        black:{
          100:'#4E4F4F',
          200:'#020303'

        }

    },


    },


  },
  plugins: [[]],
}

