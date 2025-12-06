import Grid from "@mui/material/Grid";
import logo from "../assets/logo.png";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { buttonStyle } from "../theme/style";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  isLoggedIn: boolean;
  onLogout?: () => void;
  showNavbar?: boolean;
  onLogoClick?: () => void;
}

export default function Header({
  isLoggedIn,
  onLogout,
  showNavbar = true,
  onLogoClick,
}: HeaderProps) {
  const navigate = useNavigate();
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
        px: { xs: 2, md: 8, lg: 24, xl: 24 },
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
          md: 2,
          xl: 2,
        }}
        sx={{ display: "flex", alignItems: "center", mb: { xs: 0, md: 0 } }}
      >
        <img
          src={logo}
          alt="ThymeSave Logo"
          style={{
            width: 180,
            height: 50,
            marginRight: 20,
            cursor: "pointer",
          }}
          onClick={onLogoClick || (() => navigate("/"))}
        />
      </Grid>

      {/* navbar Links (Hidden on Mobile) */}
      {showNavbar && (
        <Grid
          size={{ xs: 12, md: 8, xl: 8 }}
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
            onClick={() => navigate("/login")}
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
