import { Container, Typography, Box } from "@mui/material";

export default function UsersPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        sx={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4">Users Page</Typography>
      </Box>
    </Container>
  );
}
