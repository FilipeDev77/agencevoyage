import React from "react";
import { useParams } from "react-router-dom";
import cards from "../data/cardData"; 
import Cardchoise from "../components/cardChoise"; 
import Buttonconfirmreservation from "../components/buttonconfirmreservation";

function Infoscityview() {
  const { city } = useParams(); 

 
  const cityData = cards.find(card => card.title.toLowerCase() === city.toLowerCase());

  if (!cityData) {
    return <p>Ville non trouvée</p>;
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100"> 
      <Cardchoise card={card} addReservation={addReservation} />
      
     
      
    </div>
  );
}

export default Infoscityview;



