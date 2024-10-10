import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Default CSS file
import reportWebVitals from "./reportWebVitals"; // For measuring performance
import App from "./App";
import SideNav from "./SideNavBarComponent/SideNav";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
