import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesConfig from './routes'; // Importer le fichier Routes.jsx

function App() {
  return (
    <Router>
      <RoutesConfig /> {/* Utiliser le composant RoutesConfig ici */}
    </Router>
  );
}

export default App;
