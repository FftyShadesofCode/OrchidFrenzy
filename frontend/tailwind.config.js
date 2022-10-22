module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ["Zen Antique", "serif"],
        cursive: ["Henny Penny", "cursive"],
      },
      margin: {
        320: "320px",
      },
      width: {
        190: "190px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        656: "656px",
        880: "880px",
        508: "508px",
      },
      height: {
        80: "80px",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        685: "685px",
        800: "800px",
        "90vh": "90vh",
      },
      flex: {
        0.7: "0.7 1 0%",
      },
      maxHeight: {
        370: "370px",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },
      colors: {
        aqua: "#00FFFF",
        teal: "#008080",
        blueGreen: "#088F8F",
        sapphireBlue: "#0F52BA",
        ultramarine: "#0437F2",
        indigo: "#3F00FF",
        cobaltBlue: "#0047AB",
        darkBlue: "#00008B",
        iris: "#5D3FD3",
        violet: "#7F00FF",
        primaryPurple: "#800080",
        darkPurple: "#120043",
        facebook: "#0E8EF1",
        blackOverlay: "rgba(0, 0, 0, 0.7)",
        aquaOverlay: "rgba(0, 255, 255, 0.7)",
        tealOverlay: "rgba(0, 128, 128, 0.8)",
        irisOverlay: "rgba(93, 63, 211, 0.5)",
        ultramarineOverlay: "rgba(4, 55, 242, 0.5)",
        purpleOverlay: "rgba(128, 0, 128, 0.6)",
        violetOverlay: "rgba(127, 0, 255, 0.6)",
        cattOverlay: "rgba(255, 255, 253, 0.5)",
      },
      backgroundImage: {
        "cTenebrosa": "url('./assets/Cattleyatenebrosa.jpg')",
        "3DCattleya": "url('./assets/3DOrchid.png')",
        "backgroundFrame": "url('./assets/backgroundFrame2.png')",
        "accent1": "url('./assets/accent1.png')",
        "accent2": "url('./assets/accent2.png')",
        "accent3": "url('./assets/accent3.png')",
        "accent4": "url('./assets/accent4.png')"

      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(-200px)",
            transform: "translateX(-200px)",
          },
          "100%": {
            "-webkit-transform": "translateX(0px)",
            transform: "translateX(0px)",
          },
        },

        "slide-fwd": {
          "0%": {
            "-webkit-transform": "translateZ(0px)",
            transform: "translateZ(0px)",
          },
          "100%": {
            "-webkit-transform": "translateZ(160px)",
            transform: "translateZ(160px)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
        "slide-fwd":
          " slide-fwd 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      transitionProperty: {
        height: "height",
      },
    },
    cursor: {
      "zoom-in": "zoom-in",
      pointer: "pointer",
    },
  },
  variants: {
    // backgroundColor: ['active'],
    extend: {},
  },
  plugins: [],
};
