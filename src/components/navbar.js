import * as React from "react";

import { NavLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

export const Navbar = () => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "gray" }}>
        <Toolbar>
          <NavLink style={{ textDecoration: "none", color: "white" }} to="/">
            <MenuItem>
              <Typography
                variant="h6"
                component="div"
                sx={{ color: "white", flexGrow: 1 }}
              >
                Home
              </Typography>
            </MenuItem>
          </NavLink>
          {auth && (
            <div>
              <MenuItem
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Typography variant="h6">Account</Typography>
              </MenuItem>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <NavLink
                  to="/login"
                  style={{ textDecoration: "none", color: "gray" }}
                >
                  <MenuItem onClick={handleClose}>Sign in</MenuItem>
                </NavLink>
                <NavLink
                  to="/createaccount"
                  style={{ textDecoration: "none", color: "gray" }}
                >
                  <MenuItem onClick={handleClose}>Create account</MenuItem>
                </NavLink>
              </Menu>
            </div>
          )}
          <NavLink
            to="/alldata"
            style={{ textDecoration: "none", color: "white" }}
          ></NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
