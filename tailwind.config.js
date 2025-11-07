/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#05060f',
        teal: '#f6c103',
        graphite: '#1b1f2a'
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        card: '0 20px 45px rgba(15, 33, 66, 0.12)'
      }
    }
  },
  plugins: []
};
