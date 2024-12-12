import React from "react";
import { useParams } from "react-router-dom";

function Infoscityview() {
  const { city } = useParams();
  return (
    <div>
      <h1 className="mt-16">Informations sur la ville : {city}</h1>
      {/* Contenu spécifique à la ville */}
    </div>
  );
}

export default Infoscityview;


