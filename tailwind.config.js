/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "system-ui", "sans-serif"],
        roboto: ["Roboto", "system-ui", "sans-serif"],
        poppins: ["Poppins", "system-ui", "sans-serif"]
      },
      colors: {
        accent: {
          DEFAULT: "#2563EB",
          soft: "#E0EAFF"
        },
        base: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          700: "#374151",
          900: "#111827"
        }
      },
      boxShadow: {
        soft: "0 10px 25px -10px rgba(0,0,0,0.15)"
      },
      borderRadius: {
        '2xl': "1rem"
      }
    },
  },
  plugins: [],
}
