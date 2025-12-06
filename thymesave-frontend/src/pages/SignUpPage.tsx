import { Container, Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface SignUpPageProps {
  onSignUp: () => void;
}

export default function SignUpPage({ onSignUp }: SignUpPageProps) {
  const navigate = useNavigate();

  const handleSignUp = () => {
    onSignUp();
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
          Sign Up
        </Typography>

        <Button
          variant="contained"
          onClick={handleSignUp}
          sx={{
            backgroundColor: "#007AFF",
            "&:hover": { backgroundColor: "#0051D5" },
            px: 4,
            py: 1.5,
          }}
        >
          Sign Up
        </Button>

        <Typography sx={{ textAlign: "center" }}>
          Already have an account?{" "}
          <Button
            onClick={() => navigate("/login")}
            sx={{ textTransform: "none", color: "#007AFF", fontWeight: 600 }}
          >
            Login
          </Button>
        </Typography>
      </Box>
    </Container>
  );
}
