import React from "react";
import ShowCard from "../components/card";
import ButtonReserve from "../components/buttonreserve";

function Card() {
  const cards = [
    {
      image: "/images/cathedral-427997_640.jpg",
      title: "Barcelone",
      price: "dès 30 chf"
    },
    {
      image: "/images/edinburgh-1157124_1280.jpg",
      title: "Edinburgh",
      price: "dès 45 chf"
    },
    {
      image: "/images/big-ben-2393098_1280.jpg",
      title: "London",
      price: "dès 60 chf"
    },
  ];

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
