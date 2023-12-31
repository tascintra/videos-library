/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        prim: {
          50: '#F0F8FF',
          200: '#52ABDB',
          300: '#00B7F6',
          400: '#0083FF',
          500: '#007EFF',
          600: '#1C3C50',
          800: '#3A4251',
          900: '#202020',
        },

        sec: {
          100: '#F7F8FB',
          200: '#C8D4DD',
          400: '#838EAB',
          500: '#677294',
        },
      },

      backgroundImage: {
        'gradient-linear': 'linear-gradient(-45deg, #2c83fb 0%, #1f76f0 100%);',
      },

      content: {
        'asset-header': 'url("../assets/asset-header.png")',
      },

      borderRadius: {
        custom: '3rem 3rem 3rem 0.75rem',
      },

      screens: {
        xs: '416px',
        '1.5xl': '1432px',
      },
    },
  },
  plugins: [],
}
