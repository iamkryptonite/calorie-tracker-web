import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";

export default function PageRouter() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard/>}/>
          <Route exact path="/check" element={<Dashboard/>}/>
        </Routes>
      </Router>
    );
  }