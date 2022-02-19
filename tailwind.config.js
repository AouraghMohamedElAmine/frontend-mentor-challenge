module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        xl: "1440px",
      },
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        darkViolet: "hsl(257, 27%, 26%)",
        red: "hsl(0, 87%, 67%)",
        gray: "hsl(0, 0%, 75%)",
        grayViolet: "hsl(257, 7%, 63%)",
        darkBlue: "hsl(255, 11%, 22%)",
        darkViolet2: "hsl(260, 8%, 14%)",
      },
      spacing: {
        '5%': '5%',
        '10%': '10%',
        '90%': '90%',
        '80%': '80%',
       
      }
    },
  },
  plugins: [],
};
