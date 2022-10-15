/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        aqua: '#00FFFF',
        teal: '#008080',
        blueGreen : '#088F8F',
        sapphireBlue: '#0F52BA',
        ultramarine: '#0437F2',
        indigo: '#3F00FF',
        cobaltBlue: '#0047AB',
        darkBlue: '#00008B',
        iris: '#5D3FD3',
        violet: '#7F00FF',
        primaryPurple: '#800080',
        darkPurple: '#120043',
        lightGrey: '#F1EFEE',
        medGrey: '#FAFAFA',
        primaryGrey: '#BEBEBE',
        primaryGreen: '#73C167',
        secondaryGreen: '#355E3B',
        leafGreen: '#008000',
        seedlingGreen: '#4CBB17',
        primaryCatt: '#FFFFFD',
        primaryDeepPink: '#B01E9F',
        primaryLtPink: '#CE77BB',
        blackOverlay: 'rgba(0, 0, 0, 0.7)',
        deepPinkOverlay: 'rgba(176, 30, 143, 0.5)',
        ltPinkOverlay: 'rgba(206, 119, 187, 0.6)',
        greenOverlay: 'rgba(0, 128, 0, 0.6)',
        cattOverlay: 'rgba(255, 255, 253, 0.5)',
      }
    },
  },
  plugins: [],
}
