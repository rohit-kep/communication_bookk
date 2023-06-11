/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    
    extend: {
      colors:{
        aqua:{
          100:'#caf0fa',
          200:'#90e0ef',
          300:'#00b4d8',
          400:'#0077b6',
          500:'#03045e',
        },
        darkThemeBakground:{
          100:'#17132b',
          200:'#100826ff',
          300:'#2f1180ff'
        },
        darkThemeHighlight:'#fe754d',
        darkThemeHighlight:'ffffff0f',
      },

    },
  },
  plugins: [],
}

