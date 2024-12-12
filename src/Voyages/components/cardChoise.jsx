import React from "react";
import Buttonconfirmreservation from "./buttonconfirmreservation";
import cards from "../data/cardData";

function Cardchoise(props) {
    return (
        <div className="cardchoice bg-white w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mx-auto my-12">
            <img
                src={props.image}
                alt={props.title}

                className="h-80 w-full object-cover rounded-t-lg mb-4" // ajustez la hauteur pour un meilleur rendu
            />
            <div className="cardbody p-6 flex flex-col justify-center items-center">
                <h2 className="cardtitle text-xl font-bold mb-4">{props.title}</h2>
                <p className="cardtitle text-lg font-normal mb-4 text-gray-600">{props.description}</p>

                <Buttonconfirmreservation />


            </div>
        </div>
    );
}

export default Cardchoise;
