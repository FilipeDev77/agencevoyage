import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./navbar";
import AppRoutes from "./routes";

function App() {
  return (
    <Router>
      <AppRoutes/>
      <Navbar /> 
    </Router>
    
    
    
  );
}

export default App;

