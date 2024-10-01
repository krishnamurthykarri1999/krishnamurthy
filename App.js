import React from "react";
import "./App.css";
import Header from "./HeaderComponent/Header";
import { Register } from "./RegisterComponent/Register";
import RestaurantComponent from "./RestaurantImageComponent/RestaurantComponent";
import Footer from "./FooterComponent/Footer";
// const Headers = () => <div className="header">Header</div>;
// const Left = () => <div className="left-nav">Left Nav</div>;
// const Right = () => <div className="right-nav">Right</div>;
// const Footer = () => <div className="footer">Footer</div>;

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <Register />
        <RestaurantComponent />
      </div>
      <Footer />
    </div>
  );
};

export default App;
