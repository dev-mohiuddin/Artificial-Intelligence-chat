/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '380px',
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1280px',
        xxl: '1440px',
      },
    },
  },
  plugins: [],
}

