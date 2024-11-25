/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "640px",
    },

    extend: {

      boxShadow: {
        'neon-gradient': '0 0 15px rgba(0, 255, 255, 0.5), 0 0 25px rgba(255, 0, 255, 0.7)',
        'neon-gradient-hover': '0 0 25px rgba(0, 255, 255, 0.7), 0 0 35px rgba(255, 0, 255, 1)',
      },

      screens: {
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(max-aspect-ratio: 13/20)" },
      },
      backgroundImage: {
        "resume-section": `linear-gradient(25deg, rgba(144, 174, 219, 0.7) 28%, rgba(141, 178, 207, 0.7) 67%, rgba(150, 196, 236, 0.7) 100%)`,
        "resume-section_d": `linear-gradient(25deg, rgba(2,0,36,0.7) 28%, rgba(0,46,82,0.7) 67%, rgba(21, 42, 88,0.7) 100%)`,
       
      },

      backgroundSize: {
        "gradient-cover-grid": "cover",
        

      },
      backgroundRepeat: {
        "no-repeat-grid": "no-repeat",
        
      },
      backgroundPosition: {
        "center-grid": "center",
        
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "60%": { transform: "scaleY(1.4)" },
          "90%": { transform: "scaleY(0.9)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [
    // function ({ addUtilities }) {
    //   addUtilities({
    //     ".mask-fade-bottom": {
    //       "-webkit-mask-image":
    //         "linear-gradient(to bottom, black 70%, transparent)",
    //       "mask-image": "linear-gradient(to bottom, black 70%, transparent)",
    //       "-webkit-mask-repeat": "no-repeat",
    //       "mask-repeat": "no-repeat",
    //     },
    //   });
    // },
  ],
};
