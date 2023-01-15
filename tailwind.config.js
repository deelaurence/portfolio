module.exports = {
  content: ["./*html"],
  theme: {
    screen: {
      xs: "320px",
      sm: "480px",
      bmd: "600px",
      md: "768px",
      lg: "900px",
      xl: "1440px",
    },
    extend: {
      colors: {
        // secondaryBg: "#252734",
        primaryBg: "#212121",
        secondaryBg: "#212121",
        // primaryBg: "#333647",
        darkBoxBg: "#434657",
        orangeBg: "#ffaf2a",
        orangeText: "#d7b075",
        primaryText: "white",
        secondaryText: "white",
        blockquote: "rgba(257,257,257,0.8)",
        blockquoteMid: "rgba(257,257,257,0.5)",
        blockquoteFaint: "rgba(257,257,257,0.01)",
        blockquoteLight: "rgba(257,257,257,0.03)",
        // blockquoteFaint: "rgba(21,48,75,0.1);",
        // blockquote: "#98A1d4",
      },
    },
  },
  plugins: [],
};
