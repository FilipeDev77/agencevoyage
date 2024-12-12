import React from "react";
import { useNavigate } from "react-router-dom";

function ButtonReserve({ card, addReservation }) {
  const navigate = useNavigate();

  const handleClick = () => {
    addReservation(card);
    navigate("/reservations");
  };

  return (
    <button onClick={handleClick} className="btn btn-ghost text-xl">
      Réserver
    </button>
  );
}

export default ButtonReserve;
