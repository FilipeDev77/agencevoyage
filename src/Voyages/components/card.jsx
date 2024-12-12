import React from "react";
import ButtonReserve from "../components/buttonreserve";

function ShowCard(props) {
  return (
    <div className="card bg-white w-80 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mx-auto my-12">
      <img
        src={props.image}
        alt={props.title}
        className="h-48 w-full object-cover rounded-t-lg mb-4"
      />
      <div className="cardbody p-6 flex flex-col justify-center items-center">
        <h2 className="cardtitle text-xl font-bold mb-4">{props.title}</h2>
        <h2 className="cardtitle text-xl font-bold mb-4">{props.price}</h2>
        
      </div>
    </div>
  );
}

export default ShowCard;
