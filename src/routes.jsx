import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardView from './Home/view/dashboardView';
import Card from './Voyages/view/cardview';
import ReservationView from './Reservation/view/reservationView';
import Signup from './Connection/component/Signup';
import Signin from './Connection/component/Signin';


function AppRoutes() {
  const [reservations, setReservations] = useState([]);

  const addReservation = (reservation) => {
    setReservations([...reservations, reservation]);
  };

  return (
   
      <Routes>
        <Route path="/home" element={<DashboardView />} />
        <Route path="/voyages" element={<Card addReservation={addReservation} />} />
        <Route path="/reservations" element={<ReservationView reservations={reservations} />} />
        <Route path="/" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
      
      </Routes>
    
  );
}

export default AppRoutes;
