import { Container, Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface LoginPageProps {
  onLogin: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin();
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          Login
        </Typography>

        <Button
          variant="contained"
          onClick={handleLogin}
          sx={{
            backgroundColor: "#007AFF",
            "&:hover": { backgroundColor: "#0051D5" },
            px: 4,
            py: 1.5,
          }}
        >
          Login
        </Button>

        <Typography sx={{ textAlign: "center" }}>
          Don't have an account?{" "}
          <Button
            onClick={() => navigate("/signup")}
            sx={{ textTransform: "none", color: "#007AFF", fontWeight: 600 }}
          >
            Sign Up
          </Button>
        </Typography>
      </Box>
    </Container>
  );
}
