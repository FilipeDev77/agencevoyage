import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "./Connection/component/Signin";
import Signup from "./Connection/component/Signup";
import DashboardView from "./Home/view/dashboardView";
import Card from "./Voyages/view/cardview";
import ReservationView from "./Reservation/view/reservationView";
import PrivateRoute from './private'; // Importer PrivateRoute
import Accountview from "./Account/view/accountview";


function RoutesConfig() {
  return (
    <Routes>
     
      <Route path="/" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />

     
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <DashboardView />
          </PrivateRoute>
        }
      />
      <Route
        path="/voyages"
        element={
          <PrivateRoute>
            <Card />
          </PrivateRoute>
        }
      />
      <Route
        path="/reservations"
        element={
          <PrivateRoute>
            <ReservationView />
          </PrivateRoute>
        }
      
      />
      <Route
      path="/account" element={
        <PrivateRoute><Accountview/></PrivateRoute>
      }></Route>
    </Routes>
  );
}

export default RoutesConfig;
