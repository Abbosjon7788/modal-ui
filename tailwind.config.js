/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        // Shadows/shadow-xs
        // xs: "0 1px 2px 0 #1018280D",
        // Shadows/shadow-xs-skeuomorphic
        // "xs-skeuomorphic": "0 1px 2px 0 #1018280D, 0 -2px 0 0 #1018280D, 0 0 0 1 #1018282E",\
        xs: "0 1px 2px 0 #1018280D",
        xl: "0 8px 8px -4px #10182808, 0 20px 24px -4px #10182814",
      },
      borderRadius: {
        none: "0rem",
        xxs: "0.125rem" /*2px*/,
        xs: "0.25rem" /*4px*/,
        sm: "0.375rem" /*6px*/,
        md: "0.5rem" /*8px*/,
        lg: "0.625rem" /*10px*/,
        xl: "0.75rem" /*12px*/,
        "2xl": "1rem" /*16px*/,
        "3xl": "1.25rem" /*20px*/,
        "4xl": "1.5rem" /*24px*/,
        full: "50%",
      },
      colors: {
        base: {
          white: "#fff",
          black: "#000",
        },
        primary: {
          25: "#FCFAFF",
          50: "#F9F5FF",
          100: "#F4EBFF",
          200: "#E9D7FE",
          300: "#D6BBFB",
          400: "#B692F6",
          500: "#9E77ED",
          600: "#7F56D9",
          700: "#6941C6",
        },
        "gray-light": {
          25: "#FCFCFD",
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#E4E7EC",
          300: "#D0D5DD", // border-primary
          400: "#98A2B3", // info icon color
          500: "#667085", // placeholder color
          600: "#475467", // text color (description)
          700: "#344054", // input label color
          800: "#182230",
          900: "#101828", // input color
          950: "#0C111D",
        },
      },
      fontSize: {
        // typography font size & line-height
        "dp-2xl": [
          "4.5rem",
          {
            lineHeight: "5.625rem",
            letterSpacing: "-0.02em",
          },
        ],
        "dp-xl": [
          "3.75rem",
          {
            lineHeight: "4.5rem",
            letterSpacing: "-0.02em",
          },
        ],
        "dp-lg": [
          "3rem",
          {
            lineHeight: "3.75rem",
            letterSpacing: "-0.02em",
          },
        ],
        "dp-md": [
          "2.25rem",
          {
            lineHeight: "2.75rem",
            letterSpacing: "-0.02em",
          },
        ],
        "dp-sm": [
          "1.875rem",
          {
            lineHeight: "2.375rem",
          },
        ],
        "dp-xs": [
          "1.5rem",
          {
            lineHeight: "2rem",
          },
        ],
        xl: ["1.25rem", "1.875rem"],
        lg: ["1.125rem", "1.75rem"],
        md: ["1rem", "1.5rem"],
        sm: ["0.875rem", "1.25rem"],
        xs: ["0.75rem", "1.125rem"],
      },
      space: {
        none: "0rem",
        xxs: "0.125rem" /*2px*/,
        xs: "0.25rem" /*4px*/,
        sm: "0.375rem" /*6px*/,
        md: "0.5rem" /*8px*/,
        lg: "0.75rem" /*12px*/,
        xl: "1rem" /*16px*/,
        "2xl": "1.25rem" /*20px*/,
        "3xl": "1.5rem" /*24px*/,
        "4xl": "2rem" /*32px*/,
        "5xl": "2.5rem" /*40px*/,
        "6xl": "3rem" /*48px*/,
        "7xl": "4rem" /*64px*/,
        "8xl": "5rem" /*80px*/,
        "9xl": "6rem" /*96px*/,
        "10xl": "8rem" /*128px*/,
        "11xl": "10rem" /*160px*/,
      },
      keyframes: {
        modalIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        modalOut: {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.95)" },
        },
      },
      animation: {
        modalIn: "modalIn 0.3s ease-out forwards",
        modalOut: "modalOut 0.3s ease-in forwards",
      },
    },
  },
  variants: {},
  plugins: [
    // Gradient/skeuemorphic-gradient-border
    function ({ addUtilities }) {
      addUtilities({
        ".skeuemorphic-gradient-border": {
          "border-image": "linear-gradient( #FFFFFF1F, #FFFFFF00) 2",
        },
      });
    },
  ],
};
