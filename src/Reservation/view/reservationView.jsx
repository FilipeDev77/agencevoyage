import React from 'react';
import Navbar from '../../navbar';

export default function ReservationView({ reservations }) {
  return (
    <div className="main-content p-8 bg-gradient-to-br from-blue-100 to-indigo-200 min-h-screen flex flex-col items-center">
      <Navbar /> 
      <h1 className="text-3xl font-bold mb-6">Mes réservations</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reservations.map((reservation, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
            <img src={reservation.image} alt={reservation.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-bold">{reservation.title}</h2>
              <p className="text-gray-700">{reservation.description}</p>
              <p className="text-gray-600">{reservation.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

