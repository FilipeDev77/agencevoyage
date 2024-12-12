import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardView from "./Home/view/dashboardView";
import Card from "./Voyages/view/cardview";
import ReservationView from "./Reservation/view/reservationView";
import Infoscityview from "./Voyages/view/infoscityview";  // Assurez-vous que le composant existe

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardView />} />
      <Route path="/voyages" element={<Card />} />
      <Route path="/reservations" element={<ReservationView />} />
      <Route path="/voyages/city/:city" element={<Infoscityview />} />
    </Routes>
  );
}

export default AppRoutes;

