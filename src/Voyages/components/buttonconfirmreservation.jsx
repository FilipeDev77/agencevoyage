import React from "react";
import { useNavigate } from "react-router-dom";
import cards from "../../data/cardData"; // Assure-toi que l'import est correct

function ButtonConfirmReservation({ city }) {
    const navigate = useNavigate();

    const handleClick = () => {
        // Change 'city' à 'selectedCard' pour éviter le conflit de noms
        const selectedCard = cards.find((card) => {
            return card && card.title && typeof card.title === 'string' && card.title.toLowerCase() === city.toLowerCase();
        });

        if (!selectedCard) {
            console.error("Ville non trouvée dans les cartes.");
            return;
        }

        const newReservation = {
            id: Date.now(),
            destination: selectedCard.title,
            date: "2024-12-15",
            price: selectedCard.price,
            description: selectedCard.description,
        };

        console.log("Nouvelle réservation : ", newReservation);

        navigate(`/reservations`); // Redirige vers une page de confirmation
    };

    return (
        <button onClick={handleClick} className="btn btn-ghost text-xl">
            Réserver {city}
        </button>
    );
}

export default ButtonConfirmReservation;
