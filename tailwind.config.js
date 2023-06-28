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
        },
      },

      backgroundImage: {
        'gradient-linear':
          'linear-gradient(-45deg, #2c83fb 0%, #1f76f0 100%);',
      },
    },
  },
  plugins: [],
}
