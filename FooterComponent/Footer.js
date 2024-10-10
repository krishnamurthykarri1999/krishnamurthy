import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="body1"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            © 2024 Krishnamurthy . All rights reserved.
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
