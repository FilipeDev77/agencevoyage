/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                // Fichier HTML de l'application
    "./src/**/*.{js,ts,jsx,tsx}",  // Tous les fichiers JS/TS et JSX/TSX dans le dossier src
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),  // Si tu utilises DaisyUI, assure-toi qu'il est bien inclus
  ],
}

