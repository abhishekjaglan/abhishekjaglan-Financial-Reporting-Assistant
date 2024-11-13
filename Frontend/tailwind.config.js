/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'screenshot': "url('C:/Users/aj385009/Documents/react-app.src/assets/bg_img.webp')"
      }
    },
  },
  plugins: [],
}
