/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // O nome 'arima' será usado para gerar a classe, ex: font-arima
        arima: ['Arima', 'cursive'],
      },
      colors: {
        // básicos
        branco: '#FFFFFF',
        preto: '#000000',
        marromClaro: '#774F06',
        laranja: '#e77b38',
        detailsFooter: '#4A90E2',
        BackgroundFooter: '#FFF3D0',

        // primary (paleta institucional)
        primary: {
          DEFAULT: '#B85C27', // usado como "bg-primary"
          50: '#FFF9E8',
          500: '#B85C27',
          700: '#8A4220', // exemplo de tom mais escuro
          foreground: '#FFFFFF', // cor do texto sobre bg-primary
        },

        // títulos
        tituloH1: '#448BDF', // Azul
        tituloH2: '#285C93', // azul escuro
        tituloH3: '#285C93', // verde azulado
        tituloH5: '#0C602B', // verde escuro
      },
      screens: {
        xss: { max: '320px' },
      },
    },
  },
  plugins: [],
};
