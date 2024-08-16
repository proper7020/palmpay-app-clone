// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { light: "#00Ge52", dark: "#b4c404" },
      },
      backgroundImage: {
        background: "url('/src/assets/palmpaylogo.png')",
      },
    },
  },
  plugins: [],
};

