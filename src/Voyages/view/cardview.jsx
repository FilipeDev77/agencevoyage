import React from "react";
import ShowCard from "../components/card";
import ButtonReserve from "../components/buttonreserve";
import cards from "../data/cardData";

function Card() {
  
  return (
    <div className="main-content p-8 bg-gradient-to-br from-blue-100 to-indigo-200 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center mt-12">
        {cards.map((card, index) => (
          <div key={index}>
            <ShowCard image={card.image} title={card.title} price={card.price} />
            
            <ButtonReserve city={card.title} />

          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;

