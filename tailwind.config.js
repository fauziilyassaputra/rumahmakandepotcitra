/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "index.html"],
  theme: {
    // screens: {
    //   ssm: "350px",
    // },
    extend: {
      top: {
        "100%": "100%",
      },
      height: {
        100: "100vh",
        101: "70vh",
      },
      minheight: {
        100: "100vh",
        101: "70vh",
      },
      colors: {
        bungu: "#c7d2fe",
        tungu: "#818cf8",
        bbiru: "#7DD3FC",
      },
      fontSize: {
        "5xl": "2.5rem",
      },
      fontFamily: {
        kalam: ["Kalam"],
        courgette: ["Courgette"],
        ubuntu: ["Ubuntu"],
      },
      lineHeight: {
        full: "2.5rem",
      },
      padding: {
        "7%": "7%",
      },
    },
  },
  plugins: [],
};
