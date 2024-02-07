/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{php,js,css}", "./dist/*/*/*.{php,js}", "./dist/*/*.{php,js}"],
  theme: {
    screens: {
      's': '320px',
      'md':'766px',
      'l': '1024px',
      'xl': '1400px',

    },
    extend: {
      fontFamily: {
        'satoshi': ['Satoshi'],
      },
      keyframes: {
        pulse: {
          '0%, 100%': {
            opacity: 1,
          },
          '50%': {
            opacity: 0.9,
          },
        },
        ping: {  // Added the animate-ping keyframes here

          '75%, 100% ': {
            transform: 'scale(1.5);',
            opacity: '0;',
          },
        },
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite', // Added the animate-ping animation here
      },
      fontFace: {
        'satoshi': {
          'font-family': 'satoshi',
          'src': 'url(uploads/satoshi_fontfamily/Satoshi_Complete/Satoshi-Variable.ttf)',
        },
      },
      colors: {
        'transparent_white': '#808080',
        'transparent_white_two': 'rgba(254, 250, 224, 0.40)',
        'hover_color': '#001621',
        'vertical_orange_line': '#bc6c25',
        'underline_color': '#bc6c2566',
        'text_color_one': '#023047',
        'underline_color_two': '#bc6c254d',
        'underline_color_three': '#bc6c2533',
        'border_left_color': '#ffffff33',
        'darker_white': '#F6F6F6',
        'whiter_white': '#ffffffb3',
        'whiter_black': '#0E0E0E',
        'white-two': '#F9F9F9',
        'brown_one': '#333',
        'brown_two': '#4F4F4F',
        'white-three': '#F2F2F2',
        'footer-blue': '#02283C',
        'footer-bg': '#001C2B',
        'footer-bg-two': '#001C2B3F',
        'another_white': '#ffffffcc',
          'bortoqali' : '#bc6c251a',
        'brown-three' : '#333333',

      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

