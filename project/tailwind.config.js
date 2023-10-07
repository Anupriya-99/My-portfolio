/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'processbackground' : "url(https://static.vecteezy.com/system/resources/thumbnails/022/448/292/small/save-earth-day-poster-environment-day-nature-green-ai-generative-glossy-background-images-tree-and-water-free-photo.jpg)"
      }
    },
  },
  plugins: [],
}