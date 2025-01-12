import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
 
  const token = localStorage.getItem("token");
  console.log("Token récupéré :", token);

  if (!token || token === "undefined") {
    console.error("Aucun token valide trouvé, redirection vers /signin");
    return <Navigate to="/signin" />;
  }

  try {

    const decodedToken = JSON.parse(atob(token.split(".")[1])); 
    
 
    if (decodedToken.exp * 1000 < Date.now()) {
      console.warn("Token expiré.");
      localStorage.removeItem("token"); 
      return <Navigate to="/signin" />;
    }
  } catch (error) {
    console.error("Token invalide ou mal formé :", error);
    localStorage.removeItem("token"); 
    return <Navigate to="/signin" />;
  }


  return children;
};

export default PrivateRoute;
