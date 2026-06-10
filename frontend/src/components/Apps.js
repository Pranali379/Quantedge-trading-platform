import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Apps from "./Apps";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apps" element={<Apps />} />
    </Routes>
  );
}

export default App;