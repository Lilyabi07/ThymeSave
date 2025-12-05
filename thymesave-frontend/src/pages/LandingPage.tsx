import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { Box, Container } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import UsersPage from "./UsersPage";
import ShoppingListPage from "./ShoppingListPage";

function LandingPageContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/home");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        onLogout={handleLogout}
        showNavbar={isLoggedIn}
      />
      <Box sx={{ flex: 1 }}>
        <Routes>
          <Route
            path="/"
            element={
              !isLoggedIn ? (
                <Container
                  maxWidth="lg"
                  sx={{
                    py: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "60vh",
                  }}
                ></Container>
              ) : null
            }
          />
          <Route path="/home" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/shopping-list" element={<ShoppingListPage />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

function LandingPage() {
  return (
    <BrowserRouter>
      <LandingPageContent />
    </BrowserRouter>
  );
}

export default LandingPage;
