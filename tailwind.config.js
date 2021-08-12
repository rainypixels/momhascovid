const utopia = require('tailwind-utopia');
const multicolumns = require('@markusantonwolf/tailwind-css-plugin-multi-columns');

module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.css", "./**/*.html",],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'lora': ['Lora']
      },
      colors: {
        primary: {
          light: '#EEB8C0',
          dark: '#C22137'
        },
        whatsapp: {
          light: '#E0F7CC'
        }
      },
      opacity: {
        15: '0.15'
      },
      animation: {
        'bounce-less': 'bounce-less 6s ease-in-out infinite',
      },
      keyframes: {
        'bounce-less': {
          '0%, 100%': { transform: 'translateY(-5%)',  },
          '50%': { transform: 'none' },
        }
      },
      utopia: theme => ({
        minScreen: theme('screens.xs'),
        minSize: 16,
        maxScreen: theme('screens.xl'),
        maxSize: 20,
        minScale: 1.2,
        maxScale: 1.3,
        textSizes: [
          '2xs',
          'xs',
          'sm',
          'base',
          'lg',
          'xl',
          '2xl',
          '3xl',
          '4xl',
          '5xl',
        ],
        spacingSizes: {
          'none': 0,
          '2xs': 0.25,
          'xs': 0.5,
          'sm': 0.75,
          'md': 1,
          'lg': 1.5,
          'xl': 2,
          '2xl': 3,
          '3xl': 4,
          '4xl': 6,
        },
        spacingCustomPairs: [
          { sm: 'lg' },
          { lg: '3xl' },
          { lg: '4xl' },
        ],
      }),
    },
  },
  modules: {
    textSizes: false
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-utopia')({
      useClamp: false,
      prefix: '',
      baseTextSize: 'base',
      generateSpacing: true,
      generateAllSpacingPairs: true,
      generateFallbacks: true
   }),
   multicolumns
  ],
  corePlugins: {
    fontSize: false
  }
}