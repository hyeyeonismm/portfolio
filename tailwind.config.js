/** @type {import("tailwindcss").Config} */
module.exports = {
  mode: "jit",
  darkMode: ["class"],
  //src 하위 파일에 대해서 tailwindCSS를 사용할 수 있게 해준다.
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // pt: ["PT Serif", "serif"],
        // sans: ["Inter", "sans-serif"],
      },
      colors: {
        "marin-blue": "#7962f3",
        "marin-semiblue": "#8fa4fe",
        "marin-skyblue": "#deeafe",
        "marin-txt": "#01102A",
      },
      padding: {
        "10vh": "10vh",
        "5vh": "5vh",
      },
    },
  },
  plugins: [],
};
