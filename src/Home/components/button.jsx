import React from "react";
import { Link } from "react-router-dom";

function ButtonDashboard(){
    return(
        <Link to={"/voyages" }className="btn btn-ghost text-xl">
        <button >Get started</button>
        </Link>
    )
}

export default ButtonDashboard;