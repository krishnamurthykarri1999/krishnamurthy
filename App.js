import React, { useState } from "react";
import { Grid } from "@mui/material";
import Header from "./HeaderComponent/Header";
import { Register } from "./RegisterComponent/Register";
import RestaurantComponent from "./RestaurantImageComponent/RestaurantComponent";
import Footer from "./FooterComponent/Footer";
import SideNav from "./SideNavBarComponent/SideNav";
import DataDisplay from "./DataDisplayingComponent/DataDisplay"; // Import your DataDisplay component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status
  const [username, setUsername] = useState(""); // State to manage username

  const handleLogout = () => {
    setIsLoggedIn(false); // Update login status
    setUsername(""); // Clear username
  };

  return (
    <Router>
      <Grid container direction="column" style={{ minHeight: "100vh" }}>
        {/* Header */}
        <Grid item xs={12}>
          <Header username={username} onLogout={handleLogout} />{" "}
          {/* Pass username and logout handler */}
        </Grid>

        {/* Main Content */}
        <Grid item container xs={12} style={{ flexGrow: 1 }}>
          <Routes>
            {/* Route for the default page with Register and Restaurant components */}
            <Route
              path="/"
              element={
                !isLoggedIn ? (
                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      style={{
                        backgroundColor: "hsl(172, 26%, 16%)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Register
                        setIsLoggedIn={setIsLoggedIn}
                        setUsername={setUsername} // Pass setUsername to Register
                      />
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      md={6}
                      style={{ backgroundColor: "rgb(26, 77, 26)" }}
                    >
                      <RestaurantComponent />
                    </Grid>
                  </Grid>
                ) : (
                  <Grid container>
                    {/* Left SideNav */}
                    <Grid item xs={12} md={2}>
                      <SideNav />
                    </Grid>

                    {/* Right Data Display Component */}
                    <Grid
                      item
                      xs={12}
                      md={10}
                      style={{ backgroundColor: "rgb(26, 77, 26)" }}
                    >
                      <DataDisplay /> {/* Display data component */}
                    </Grid>
                  </Grid>
                )
              }
            />

            {/* Route for the Dashboard page after login */}
            <Route
              path="/dashboard"
              element={
                isLoggedIn && (
                  <Grid container>
                    {/* Left SideNav */}
                    <Grid item xs={12} md={2}>
                      <SideNav />
                    </Grid>
                  </Grid>
                )
              }
            />
          </Routes>
        </Grid>

        {/* Footer */}
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Router>
  );
};

export default App;
