/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-container': 'var(--primary-container)',
        'on-primary': 'var(--on-primary)',
        secondary: 'var(--secondary)',
        background: 'var(--background)',
        'on-background': 'var(--on-background)',
        surface: 'var(--surface)',
        'on-surface': 'var(--on-surface)',
        'surface-container-lowest': 'var(--surface-container-lowest)',
        'surface-container-low': 'var(--surface-container-low)',
        'surface-container': 'var(--surface-container)',
        'surface-container-high': 'var(--surface-container-high)',
        'outline-variant': 'var(--outline-variant)',
        error: 'var(--error)',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Manrope', 'sans-serif'],
      },
      boxShadow: {
        'organic': '0 4px 24px rgba(45, 90, 39, 0.06)',
        'organic-lg': '0 12px 48px rgba(45, 90, 39, 0.10)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
};
