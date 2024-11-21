/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      fontFamily: {
        700: ['Poppins', 'Bold'],
        500: ['Poppins', 'Medium'],
      },
  		colors: {
        yellow: '#FC9326',
        abu: '#323232',
        primary: '#E9E9E9',
        secondary: '#707070'
      }
  	},
  },
  plugins: [require("tailwindcss-animate")],
}

