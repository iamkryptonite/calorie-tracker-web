import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import FoodTracker from "../pages/FoodTracker";

export default function PageRouter() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard/>}/>
          <Route path="/track" element={<FoodTracker/>}/>
        </Routes>
      </Router>
    );
  }