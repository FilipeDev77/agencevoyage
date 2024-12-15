import React from 'react';
import Navbar from '../../navbar';

const ReservationsView = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Title header */}
      <header className="bg-blue-500 text-white py-4 px-6 shadow-lg mt-2">  {/* Ajout d'une marge spécifique */}
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold">Page de Réservations</h1>
        </div>
      </header>
    </div>
  );
};

export default ReservationsView;
