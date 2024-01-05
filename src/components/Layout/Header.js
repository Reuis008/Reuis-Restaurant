import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import LunchDiningTwoToneIcon from "@mui/icons-material/LunchDiningTwoTone";
import { Link } from "react-router-dom";
import MenuOpenTwoToneIcon from "@mui/icons-material/MenuOpenTwoTone";
import "../../styles/Header.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"#81b1c9"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
        style={{ fontFamily: "cursive"}}
      >
        <LunchDiningTwoToneIcon />
        Restaurant
        
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuOpenTwoToneIcon />
            </IconButton>
            <Typography
              color={"#81b1c9"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ fontFamily: "cursive",display:"flex" ,alignItems:'center' }}
            >
              <LunchDiningTwoToneIcon />
              Restaurant
             
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul
                className="navigation-menu"
                style={{
                  listStyle: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            color="black"
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "200px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
