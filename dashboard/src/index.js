import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./components/Dashboard";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Dashboard />
    
    </BrowserRouter >
  </React.StrictMode>
);