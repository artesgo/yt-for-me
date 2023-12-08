/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.svelte'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "cupcake", "forest", "coffee"],
  },
  plugins: [require("daisyui")],
}
