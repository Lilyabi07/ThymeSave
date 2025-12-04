import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";

interface HeaderProps {
  isLoggedIn: boolean;
  onLogin?: () => void;
  onLogout?: () => void;
}

export default function Header({ isLoggedIn, onLogin, onLogout }: HeaderProps) {
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      sx={{ backgroundColor: "#1976d2", color: "white", p: 2 }}
    >
      <Grid size={{ xs: 6, xl: 12 }}>
        <Typography variant="h5" fontWeight="bold">
          ThymeSave
        </Typography>
      </Grid>

      <Grid size={{ xs: 6, xl: 12 }}>
        <Navbar isLoggedIn={isLoggedIn} />
      </Grid>

      <Grid size={{ xs: 12, xl: 12 }} sx={{ textAlign: "right" }}>
        {isLoggedIn ? (
          <Button variant="contained" color="secondary" onClick={onLogout}>
            Logout
          </Button>
        ) : (
          <Button variant="contained" color="secondary" onClick={onLogin}>
            Login
          </Button>
        )}
      </Grid>
    </Grid>
  );
}
