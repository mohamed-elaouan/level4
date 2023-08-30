import { Outlet, useLocation } from "react-router-dom";
import { Box, Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Drawerr from "MUIComponent/Drawerr";
import Appbar from "MUIComponent/Appbar";
//impotent de darkmode
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import DrawerMobile from "MUIComponent/DrawerMobile";
import {
  amber,
  cyan,
  deepOrange,
  deepPurple,
  green,
  grey,
  red,
  teal,
} from "@mui/material/colors";
import React from "react";
import  InboxIcon  from '@mui/icons-material/MoveToInbox';
import  MailIcon  from '@mui/icons-material/Mail';
const Root = () => {
  const drawerWidth = 240;
  //Code darkMode
  const [mode, setMode] = useState(
    localStorage.getItem("CurrentMode") == null
      ? "light"
      : localStorage.getItem("CurrentMode") === "dark"
      ? "dark"
      : "light"
  );
  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: teal,
            divider: teal[200],
            text: {
              primary: teal[900],
              secondary: teal[800],
            },
            FavCol: {
              main: deepPurple[700],
            },

            StylHover: {
              main: "rgba(0, 0, 0, 0.04)",
            },
          }
        : {
            // palette values for dark mode
            divider: "gray",
            FavCol: {
              main: cyan[600],
            },
            StylHover: {
              main: "rgba(255, 255, 255, 0.08)",
            },
          }),
    },
  });

  
  /*debut */
  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  /*Fin*/

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Drawerr drawerWidth={drawerWidth} setMode={setMode} />
        <Appbar drawerWidth={drawerWidth} toggleDrawer={toggleDrawer} />
        <Box
          sx={{
            width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: { md: `${drawerWidth}px` },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <DrawerMobile toggleDrawer={toggleDrawer} state={state} setMode={setMode} drawerWidth={drawerWidth}  />
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Root;
