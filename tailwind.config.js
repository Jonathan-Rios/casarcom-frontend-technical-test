/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#32C0C6",
        primaryColorLight: "#D4EDEE",
        primaryColorDark: "#329599",

        placeholder: "#8C8C8C",
        greyNeutral: "#616161",
        greyDark: "#4E4E4E",

        whiteBackgroundLight: "#FFFFFF",
        whiteBackgroundMatte: "#F3F3F5",
        borderAndLine: "#E9ECEF",

        SuccessCheck: "#5CB85C",
        Warning: "#FFB22B",
        Danger: "#FC4B6C",
      },

      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },

      fontSize: {
        h1: "21px",
        h2: "18px",
        h3: "18px",
        h4: "16px",
        h5: "16px",
        md: "14px",
        sm: "12px",
      },
    },
  },
  plugins: [],
};
