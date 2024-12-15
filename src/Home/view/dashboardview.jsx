import React from 'react';
import ButtonDashboard from '../components/button';



function DashboardView() {
  return (
   
   
    <div className="mt-16 flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-300 to-blue-600 text-white">
      
       
      <div className="text-center max-w-lg px-4">
      
        <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 drop-shadow-lg">
          Découvrez le Monde
        </h1>
        <p className="mt-4 text-xl text-white/90 font-light">
          Préparez-vous à vivre des expériences inoubliables avec nos offres de voyage personnalisées.
        </p>
      </div>
      <div className="mt-8">
        <ButtonDashboard />
      </div>
    </div>
  );
}

export default DashboardView;
