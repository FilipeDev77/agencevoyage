import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // Récupérer le token du localStorage
  const token = localStorage.getItem("token");
  console.log("Token récupéré :", token);

  // Si le token n'est pas présent ou est invalide, rediriger vers la page de connexion
  if (!token || token === "undefined") {
    console.error("Aucun token valide trouvé, redirection vers /signin");
    return <Navigate to="/signin" />;
  }

  try {
    // Décoder le payload du JWT pour vérifier l'expiration
    const decodedToken = JSON.parse(atob(token.split(".")[1])); // Décodage de la partie payload du token
    
    // Vérifier si le token a expiré
    if (decodedToken.exp * 1000 < Date.now()) {
      console.warn("Token expiré.");
      localStorage.removeItem("token"); // Supprimer le token expiré
      return <Navigate to="/signin" />;
    }
  } catch (error) {
    console.error("Token invalide ou mal formé :", error);
    localStorage.removeItem("token"); // Supprimer un token invalide
    return <Navigate to="/signin" />;
  }

  // Si tout est valide, afficher la route protégée
  return children;
};

export default PrivateRoute;
