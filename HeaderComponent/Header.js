import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header({ username, onLogout }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {username ? `Welcome, ${username}!` : "Welcome!"}{" "}
            {/* Display username if available */}
          </Typography>
          {username ? (
            <Button color="inherit" onClick={onLogout}>
              Logout
            </Button> // Logout button if logged in
          ) : (
            <Button color="inherit">Register</Button> // Show register button if not logged in
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
