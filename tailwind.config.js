/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

// const colors = require("tailwindcss/colors");
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["Inter", ...defaultTheme.fontFamily.sans],
//       },
//       colors: {
//         primary: {
//           DEFAULT: colors.orange[500],
//           ...colors.orange,
//         },
//       },
//     },
//   },
//   plugins: [],
// };
