/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './src/**/*.{js,jsx,ts,tsx}', //tailwind pure
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}' //for flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

