import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100 fixed top-0 left-0 right-0 z-10 shadow-md">
      <div className="flex-1">
        <Link to="/home" className="btn btn-ghost text-xl">
          Home
        </Link>
        <Link to="/voyages" className="btn btn-ghost text-xl">
          Voyages
        </Link>
        <Link to="/reservations" className="btn btn-ghost text-xl">
          Mes réservations
        </Link>
        
     
      </div>
    </div>
  );
}

export default Navbar;
