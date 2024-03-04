import React from "react";
import ReactDOM from "react-dom/client";
import "./style/Index.scss";
import App from "./pages/home/App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
