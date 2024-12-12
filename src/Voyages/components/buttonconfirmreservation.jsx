import React from "react";
import { useNavigate } from "react-router-dom"; 

function Buttonconfirmreservation(){

    const navigate=useNavigate();

    const handleclick=()=>{
        navigate("/reservations");
    }
    return(
        <button onDoubleClick={handleclick} className="btn btn-ghost text-xl">Réserver</button>
    )
}

export default Buttonconfirmreservation;