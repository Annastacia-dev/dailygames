/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.html',
    './*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto", sans-serif'],
        courier: ['"Courier Prime", monospace'],
      },
      colors: {
        primary: "#79046b"
      }
    },
  },
  plugins: [],
}

