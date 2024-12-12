import React from "react";
import ShowCard from "../components/card";
import ButtonReserve from "../components/buttonreserve";
import cards from "../data/cardData";

function Card({ addReservation }) {
  
  return (
    <div className="main-content p-8 bg-gradient-to-br from-blue-100 to-indigo-200 min-h-screen flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="text-gray-700">{card.price}</p>
              <p className="text-gray-600">{card.description}</p>
              <div className="mt-4 flex justify-end">
                <ButtonReserve card={card} addReservation={addReservation} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
