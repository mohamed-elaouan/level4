import { useLocation, useNavigate } from "react-router-dom";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  IconButton,
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useTheme } from "@emotion/react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Drawerr = ({ drawerWidth, setMode }) => {
  const navigate = useNavigate();

  const theme = useTheme();
  const location = useLocation();
  return (
    <Drawer
      sx={{
        width: drawerWidth,display:{xs:"none",md:"block"},
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 3,
        }}
      >
        <IconButton
          sx={{ ml: 1 }}
          onClick={() => {
            localStorage.setItem(
              "CurrentMode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            setMode(theme.palette.mode === "dark" ? "light" : "dark");
          }}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon color="warning" />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Box>
      
      <Divider color="black" />

      <List>
        {/* home */}
        <ListItem sx={{bgcolor: location.pathname === "/" ? theme.palette.StylHover.main : null }}
          disablePadding
          onClick={() => {
            navigate("/");
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        {/* create */}
        <ListItem sx={{bgcolor: location.pathname === "/Create" ? theme.palette.StylHover.main : null }}
          disablePadding
          onClick={() => {
            navigate("/Create");
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="Create" />
          </ListItemButton>
        </ListItem>
        {/* profil */}
        <ListItem sx={{bgcolor: location.pathname === "/Profil" ? theme.palette.StylHover.main : null }}
        disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        {/* setting */}
        <ListItem sx={{bgcolor: location.pathname === "/Setting" ? theme.palette.StylHover.main : null }}
        disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItemButton>
        </ListItem>
        {/* logout */}
        <ListItem sx={{bgcolor: location.pathname === "/Sign-Out" ? theme.palette.StylHover.main : null }}
        disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Drawerr;
