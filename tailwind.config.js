/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        /* Primary */
        "lime-green": "hsl(163, 72%, 41%)",
        "bright-red": "hsl(356, 69%, 56%)",
        "facebook": "hsl(208, 92%, 53%)",
        "twitter": "hsl(203, 89%, 53%)",
        "instagram-gradient-one": "hsl(37, 97%, 70%)",
        "instagram-gradient-two": "hsl(329, 70%, 58%)",
        "youtube": "hsl(348, 97%, 39%)",
        "gradient-switch-first": "hsl(210, 78%, 56%)",
        "gradient-switch-second": "hsl(146, 68%, 55%)",
        /* Dark Theme */
        "dark-blue-backgorund": "hsl(230, 17%, 14%)",
        "dark-blue-bg-top": "hsl(232, 19%, 15%)",
        "dark-blue-cards": "hsl(228, 28%, 20%)",
        "dark-blue-text": "hsl(228, 34%, 66%)",
        "dark-texto": "hsl(0, 0%, 100%)",
        /* Light Theme */
        "white-bg": "hsl(0, 0%, 100%)",
        "light-bg-top": "hsl(225, 100%, 98%)",
        "light-blue-cards": "hsl(227, 47%, 96%)",
        "light-dark-gray-text": "hsl(228, 12%, 44%)",
        "light-blue-text": "hsl(230, 17%, 14%)",
      },
      fontFamily: {
        "inter-font":'"Inter",sans-serif'
      },
      backgroundImage: {
        "sun" : "url('../img/sun.svg')",
        "moon": "url('../img/moon.svg')"
      },
      letterSpacing: {
        "extra-widest":"0.5em"
      }
    },
  },
  plugins: [],
  
}

