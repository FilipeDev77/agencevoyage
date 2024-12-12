// src/components/buttonreserve.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Import de useNavigate

function ButtonReserve({ city }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigation vers la page Infoscityview avec la ville sélectionnée
    navigate(`/voyages/city/${city}`);
  };

  return (
    <button onClick={handleClick} className="btn btn-ghost text-xl">
      Réserver {city}
    </button>
  );
}

export default ButtonReserve;





