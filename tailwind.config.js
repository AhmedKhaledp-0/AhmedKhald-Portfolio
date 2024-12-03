/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#495E57", // Custom primary color
        secondary: "#F4CE14", // Custom secondary color
        light: "#F5F7F8",
        // Add more custom colors here
      },
    },
  },
  plugins: [],
};
