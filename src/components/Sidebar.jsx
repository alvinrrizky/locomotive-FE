import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <>
      <Box sx={{ p: 2 }}>
        <Typography
          variant="h6"
          sx={{
            mt: 1,
            textAlign: "center",
            fontWeight: 700,
            color: "#DFFF00",
            borderBottom: "2px solid #FFFFFF",
            paddingBottom: "8px",
          }}
        >
          LOCOMOTIVE{" "}
          <span style={{ fontWeight: 400, color: "#FFFFFF" }}>WEB</span>
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <List sx={{ width: "80%" }}>
          <ListItem
            button
            component={Link}
            to="/"
            sx={{
              py: 0.5,
              "&:hover": {
                borderRadius: "8px",
              },
            }}
            onClick={isMobile ? handleDrawerToggle : undefined}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <HouseSidingIcon sx={{ color: "#FFFFFF" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "#FFFFFF" }} primary="Dashboard" />
          </ListItem>
        </List>
      </Box>
    </>
  );

  return (
    <>
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            mr: 2,
            display: { sm: "none" },
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1200,
          }}
        >
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={isMobile ? handleDrawerToggle : undefined}
        anchor="left"
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            backgroundColor: "#228B22",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
