/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-linear':
          'linear-gradient(-45deg, #2c83fb 0%, #1f76f0 100%);',
      },
    },
  },
  plugins: [],
}
