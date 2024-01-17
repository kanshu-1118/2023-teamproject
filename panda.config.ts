import { defineConfig } from "@pandacss/dev"

export default defineConfig({
    // Whether to use css reset
    preflight: true,
    
    // Where to look for your css declarations
    include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/pages/**/*.{ts,tsx,js,jsx}"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
      extend: {
        tokens: {
          colors: {
            main : {value : "#63A6F7"},
            accent : {value : "#FCFA68"},
            red : {value : "#FF7878"},
            base : {value : "#FAFCFF"},
            fontColor : {value : "#100F0F"},
            gray:{value: "rgba(92, 90, 90, 0.06)"},
          }
        }
      }
    },

    // The output directory for your css system
    outdir: "styled-system",

    jsxFramework: 'react',
    
})