import Grid from "@mui/material/Grid";
import logo from "../assets/logo.png";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { buttonStyle } from "../theme/style";

interface HeaderProps {
  isLoggedIn: boolean;
  onLogin?: () => void;
  onLogout?: () => void;
  showNavbar?: boolean;
}

export default function Header({
  isLoggedIn,
  onLogin,
  onLogout,
  showNavbar = true,
}: HeaderProps) {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      sx={{
        backgroundColor: "#ffffffff",
        color: "black",
        p: 4,
        pb: 1.5,
        px: { xs: 2, md: 5, xl: 35 },
        boxSizing: "border-box",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* mobile Menu (Left) */}
      {showNavbar && (
        <Grid
          size={{ xs: 1, md: 0, xl: 0 }}
          sx={{
            display: { xs: "flex", md: "none", xl: "none" },
            alignItems: "center",
          }}
        >
          <MobileMenu />
        </Grid>
      )}

      {/* logo */}
      <Grid
        size={{
          xs: showNavbar ? 10 : 11,
          md: showNavbar ? 3 : 9,
          xl: showNavbar ? 3 : 9,
        }}
        sx={{ display: "flex", alignItems: "center", mb: { xs: 0, md: 0 } }}
      >
        <img
          src={logo}
          alt="ThymeSave Logo"
          style={{ width: 180, height: 50, marginRight: 20 }}
        />
      </Grid>

      {/* navbar Links (Hidden on Mobile) */}
      {showNavbar && (
        <Grid
          size={{ xs: 12, md: 6, xl: 6 }}
          sx={{
            display: { xs: "none", md: "flex", xl: "flex" },
            justifyContent: "center",
            mb: { xs: 1, md: 0 },
          }}
        >
          <Navbar />
        </Grid>
      )}

      {/* login / logout button + profile icon */}
      <Grid
        size={{ xs: 1, md: 2, xl: 2 }}
        sx={{
          display: "flex",
          justifyContent: { xs: "flex-end", md: "flex-end" },
          alignItems: "center",
          gap: 0,
        }}
      >
        {isLoggedIn ? (
          <>
            <Button
              variant="text"
              color="inherit"
              onClick={onLogout}
              sx={buttonStyle}
              disableRipple={true}
            >
              Logout
            </Button>
            <Button
              color="inherit"
              disableRipple={true}
              sx={{ "&:hover": { backgroundColor: "transparent" } }}
            >
              <AccountCircleIcon />
            </Button>
          </>
        ) : (
          <Button
            variant="text"
            color="inherit"
            onClick={onLogin}
            sx={buttonStyle}
            disableRipple={true}
          >
            Login
          </Button>
        )}
      </Grid>
    </Grid>
  );
}
