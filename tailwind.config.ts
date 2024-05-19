import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        green: {
          50: '#EFFDF5',
          100: '#D9FBE8',
          200: '#B3F5D1',
          300: '#75EDAE',
          400: '#00DC82',
          500: '#00C16A',
          600: '#00A155',
          700: '#007F45',
          800: '#016538',
          900: '#0A5331',
          950: '#052e16'
        },
        aquamarine: {
            50: '#eafff5',
            100: '#ccffe6',
            200: '#9cfcd1',
            300: '#60f5bc',
            400: '#21e6a0',
            500: '#00cd8b',
            600: '#00a772',
            700: '#00865f',
            800: '#006a4c',
            900: '#005740',
            950: '#003126',
        },
      }
    }
  }
}
