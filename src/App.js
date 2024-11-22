import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Lecture1 from './Lecture1'; // Import your Lecture1 component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/lecture1" element={<Lecture1 />} /> {/* Add a route for Lecture1 */}
      </Routes>
    </Router>
  );
}

export default App;

