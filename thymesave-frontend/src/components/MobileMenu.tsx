import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function MobileMenu() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    console.log(`Navigating to ${page}`);
    handleClose();
    // TODO: dd routing logic here
  };

  if (!isMobile) return null;

  return (
    <>
      <IconButton
        size="large"
        onClick={handleOpen}
        color="inherit"
        disableRipple={true}
        sx={{
          mr: 4,
          "&:focus": {
            outline: "none",
            boxShadow: "none",
          },
          "&:active": {
            outline: "none",
            boxShadow: "none",
          },
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiDrawer-paper": {
            width: 280,
            backgroundColor: "#F4FBFF",
            boxShadow: "2px 2px 15px rgba(51, 51, 51, 0.1)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{ color: "inherit" }}
            disableRipple={true}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Typography
          sx={{
            textAlign: "center",
            mb: 4,
            mt: 2,
            fontFamily: "Inter",
            fontSize: "1.2em",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "#333333",
          }}
        >
          Menu
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          <MenuItem
            onClick={(e) => handleNavClick(e, "home")}
            data-text="Home"
            sx={{
              fontSize: "1.2em",
              fontWeight: 700,
              fontFamily: "Inter",
              py: 2,
              px: 2,
              justifyContent: "center",
              color: "#333333",
              transition: "all 0.5s ease",
              position: "relative",
              "&::before": {
                content: "attr(data-text)",
                position: "absolute",
                top: "50%",
                left: "40%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "3em",
                color: "rgba(250, 244, 160, 0.86)",
                borderRadius: "50%",
                zIndex: -1,
                opacity: 0,
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "500px",
                transition: "letter-spacing 0.5s, left 0.5s, opacity 0.5s",
                background: "#fffac8ff",
              },
              "&:hover::before": {
                opacity: 1,
                left: "50%",
                letterSpacing: "10px",
                width: "800px",
                height: "800px",
              },
              "&:hover": {
                color: "#000000ff",
                boxShadow: "none",
                backgroundColor: "transparent",
              },
            }}
          >
            Home
          </MenuItem>
          <MenuItem
            onClick={(e) => handleNavClick(e, "users")}
            data-text="Users"
            sx={{
              fontSize: "1.2em",
              fontWeight: 700,
              fontFamily: "Inter",
              py: 2,
              px: 2,
              justifyContent: "center",
              color: "#333333",
              transition: "all 0.5s ease",
              position: "relative",
              "&::before": {
                content: "attr(data-text)",
                position: "absolute",
                top: "50%",
                left: "40%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "3em",
                color: "rgba(105, 225, 255, 0.73)",
                borderRadius: "50%",
                zIndex: -1,
                opacity: 0,
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "500px",
                transition: "letter-spacing 0.5s, left 0.5s, opacity 0.5s",
                background: "#b2e7ffff",
              },
              "&:hover::before": {
                opacity: 1,
                left: "50%",
                letterSpacing: "10px",
                width: "800px",
                height: "800px",
              },
              "&:hover": {
                color: "#000000ff",
                boxShadow: "none",
                backgroundColor: "transparent",
              },
            }}
          >
            Users
          </MenuItem>
          <MenuItem
            onClick={(e) => handleNavClick(e, "shopping-list")}
            data-text="shop"
            sx={{
              fontSize: "1.2em",
              fontWeight: 700,
              fontFamily: "Inter",
              py: 2,
              px: 2,
              justifyContent: "center",
              color: "#333333",
              transition: "all 0.5s ease",
              position: "relative",
              "&::before": {
                content: "attr(data-text)",
                position: "absolute",
                top: "50%",
                left: "40%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "2.5em",
                color: "rgba(166, 159, 255, 0.91)",
                borderRadius: "50%",
                zIndex: -1,
                opacity: 0,
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "500px",
                transition: "letter-spacing 0.5s, left 0.5s, opacity 0.5s",
                background: "#d7d4ffff",
              },
              "&:hover::before": {
                opacity: 1,
                left: "50%",
                letterSpacing: "20px",
                width: "800px",
                height: "800px",
              },
              "&:hover": {
                color: "#000000ff",
                boxShadow: "none",
                backgroundColor: "transparent",
              },
            }}
          >
            Shopping List
          </MenuItem>
        </Box>
      </Drawer>
    </>
  );
}
