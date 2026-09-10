module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  corePlugins: { preflight: false },
  theme: { extend: {
    fontFamily: { arima: ['Arima', 'serif'] },
    colors: { branco: '#fff', preto: '#000', marromClaro: '#774F06', laranja: '#e77b38', detailsFooter: '#4A90E2', BackgroundFooter: '#FFF3D0', primary: { DEFAULT: '#B85C27', 50: '#FFF9E8', 500: '#B85C27', 700: '#8A4220', foreground: '#fff' }, tituloH1: '#448BDF', tituloH2: '#285C93', tituloH3: '#285C93', tituloH5: '#0C602B' }
  } }
};
