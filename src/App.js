import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Lecture1 from './Lecture1'; // Import your Lecture1 component
import Lecture2 from './Lecture2'; // Import your Lecture2 component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/lecture1" element={<Lecture1 />} /> {/* Add a route for Lecture1 */}
        <Route path="/lecture2" element={<Lecture2 />} /> {/* Add a route for Lecture2 */}
      </Routes>
    </Router>
  );
}

export default App;

