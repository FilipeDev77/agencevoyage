import React from "react";
import { Link } from "react-router-dom";

function ButtonReserve({ city }) {
  return (
    <Link to={`/voyages/city/${city}`}>
      <button className="btn btn-ghost text-xl">Réserver maintenant</button>
    </Link>
  );
}

export default ButtonReserve;


