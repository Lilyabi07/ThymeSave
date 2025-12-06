import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { Typography, Box, Grid } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import UsersPage from "./UsersPage";
import ShoppingListPage from "./ShoppingListPage";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import grassImage from "../assets/grass.png";
import infoImage from "../assets/imageyesyes.png";
import tomato from "../assets/tomato.jpg";
import pie from "../assets/pie.jpg";
import readyImage from "../assets/Ready.png";
import chicken from "../assets/chicken.jpg";
import pasta from "../assets/pasta.jpg";
function LandingPageContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
  const navigate = useNavigate();

  const recipeImages = [tomato, chicken, pie, pasta];

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/home");
  };

  const handleNextRecipe = () => {
    setCurrentRecipeIndex((prev) => (prev + 1) % recipeImages.length);
  };

  const handlePrevRecipe = () => {
    setCurrentRecipeIndex(
      (prev) => (prev - 1 + recipeImages.length) % recipeImages.length
    );
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleLogoClick = () => {
    if (isLoggedIn) {
      handleLogout();
    } else {
      navigate("/");
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        showNavbar={isLoggedIn}
        onLogoClick={handleLogoClick}
      />

      <main style={{ flex: 1, padding: "0 16px" }}>
        <div
          style={{
            maxWidth: "1800px",
            margin: "0 auto",
            padding: "32px 0",
          }}
        >
          <Routes>
            <Route
              path="/"
              element={
                !isLoggedIn ? (
                  <Grid container justifyContent="center">
                    <Grid size={{ xs: 12, lg: 12, xl: 10 }}>
                      <Box
                        sx={{
                          position: "relative",
                          backgroundImage: `url(${grassImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          minHeight: {
                            xs: "300px",
                            sm: "400px",
                            md: "550px",
                            lg: "750px",
                          },
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "center",
                          border: "1px solid black",
                          borderRadius: "50px",
                          paddingTop: {
                            xs: "20px",
                            sm: "25px",
                            md: "35px",
                            lg: "45px",
                          },
                        }}
                      >
                        <div
                          style={{
                            textAlign: "center",
                            position: "relative",
                            zIndex: 10,
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "DM Serif Display",
                              fontSize: {
                                xs: "48px",
                                sm: "48px",
                                md: "80px",
                                lg: "120px",
                                xl: "120px",
                              },
                              textAlign: "center",
                              WebkitTextStroke: "1px black",
                              color: "white",
                              fontWeight: 600,
                              lineHeight: 1,
                            }}
                          >
                            Savor Time,
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "DM Serif Display",
                              fontSize: {
                                xs: "48px",
                                sm: "48px",
                                md: "80px",
                                lg: "120px",
                                xl: "120px",
                              },
                              textAlign: "center",
                              WebkitTextStroke: "1px black",
                              color: "white",
                              fontWeight: 700,
                              lineHeight: 0.9,
                            }}
                          >
                            Savor Flavor
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Inter",
                              fontSize: {
                                xs: "12px",
                                sm: "13px",
                                md: "14px",
                                lg: "15px",
                              },
                              color: "black",
                              textAlign: "center",
                              marginTop: "10px",
                              maxWidth: "600px",
                              lineHeight: 1,
                              letterSpacing: "0.05em",
                            }}
                          >
                            Your all-in-one recipe manager and meal planner.
                            Save recipes, build meal plans, and generate
                            shopping lists automatically.
                          </Typography>
                          <Box
                            component="button"
                            onClick={() => navigate("/signup")}
                            sx={{
                              marginTop: "20px",
                              padding: "10px 30px",
                              border: "1px solid black",
                              borderRadius: "10px",
                              backgroundColor: "white",
                              fontFamily: "Inter",
                              fontSize: {
                                xs: "12px",
                                sm: "13px",
                                md: "14px",
                                lg: "15px",
                                xl: "16px",
                              },
                              cursor: "pointer",
                            }}
                          >
                            Start Browsing
                          </Box>
                        </div>
                      </Box>
                    </Grid>

                    {/* Info Image Section */}
                    <Grid size={{ xs: 12, lg: 12, xl: 10 }}>
                      <Box
                        component="img"
                        src={infoImage}
                        alt="Information"
                        sx={{
                          width: "100%",
                          height: "auto",
                          marginTop: "100px",
                        }}
                      />
                    </Grid>

                    {/* Our Official Recipes Carousel Section */}
                    <Grid size={{ xs: 12, lg: 12, xl: 10 }}>
                      <Typography
                        sx={{
                          fontFamily: "Inter",
                          fontSize: {
                            xs: "20px",
                            sm: "28px",
                            md: "36px",
                            lg: "40px",
                            xl: "47px",
                          },
                          fontWeight: 700,
                          textAlign: "center",
                          marginTop: "80px",
                          marginBottom: "40px",
                          color: "black",
                          letterSpacing: "-0.03em",
                        }}
                      >
                        Our Official Recipes
                      </Typography>

                      <Box
                        sx={{
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "0px 0",
                          minHeight: { xs: "200px", md: "250px", lg: "300px" },
                        }}
                      >
                        {/* Left Side Image (Previous) */}
                        <Box
                          component="img"
                          src={
                            recipeImages[
                              (currentRecipeIndex - 1 + recipeImages.length) %
                                recipeImages.length
                            ]
                          }
                          alt="Previous Recipe"
                          sx={{
                            display: { xs: "none", md: "block" },
                            position: "absolute",
                            left: { md: "20px", lg: "40px", xl: "50px" },
                            width: { md: "320px", lg: "360px", xl: "400px" },
                            height: { md: "200px", lg: "225px", xl: "250px" },
                            objectFit: "cover",
                            borderRadius: "20px",
                            border: "2px solid #3b3b3bff",
                            opacity: 0.6,
                            transform: "scale(0.9)",
                            zIndex: 1,
                            cursor: "pointer",
                          }}
                          onClick={handlePrevRecipe}
                        />

                        {/* Center Image (Current) */}
                        <Box
                          component="img"
                          src={recipeImages[currentRecipeIndex]}
                          alt={`Recipe ${currentRecipeIndex + 1}`}
                          sx={{
                            width: {
                              xs: "90%",
                              sm: "85%",
                              md: "500px",
                              lg: "550px",
                              xl: "600px",
                            },
                            height: {
                              xs: "200px",
                              sm: "230px",
                              md: "250px",
                              lg: "280px",
                              xl: "300px",
                            },
                            objectFit: "cover",
                            borderRadius: "20px",
                            border: "2px solid black",
                            zIndex: 10,
                            transition: "all 0.3s ease",
                          }}
                        />

                        {/* Right Side Image (Next) */}
                        <Box
                          component="img"
                          src={
                            recipeImages[
                              (currentRecipeIndex + 1) % recipeImages.length
                            ]
                          }
                          alt="Next Recipe"
                          sx={{
                            display: { xs: "none", md: "block" },
                            position: "absolute",
                            right: { md: "20px", lg: "40px", xl: "50px" },
                            width: { md: "320px", lg: "360px", xl: "400px" },
                            height: { md: "200px", lg: "225px", xl: "250px" },
                            objectFit: "cover",
                            borderRadius: "20px",
                            border: "2px solid #1b1b1bff",
                            opacity: 0.6,
                            transform: "scale(0.9)",
                            zIndex: 1,
                            cursor: "pointer",
                          }}
                          onClick={handleNextRecipe}
                        />
                      </Box>

                      {/* Navigation Buttons and Dots */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "30px",
                          marginTop: "30px",
                        }}
                      >
                        {/* Previous Button */}
                        <button
                          onClick={handlePrevRecipe}
                          style={{
                            backgroundColor: "white",
                            border: "2px solid black",
                            borderRadius: "50%",
                            width: "40px",
                            height: "40px",
                            cursor: "pointer",
                            fontSize: "20px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          ‹
                        </button>

                        {/* Carousel Indicators */}
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "10px",
                          }}
                        >
                          {recipeImages.map((_, index) => (
                            <Box
                              key={index}
                              onClick={() => setCurrentRecipeIndex(index)}
                              sx={{
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                                backgroundColor:
                                  index === currentRecipeIndex
                                    ? "black"
                                    : "#ddd",
                                cursor: "pointer",
                                transition: "background-color 0.3s ease",
                              }}
                            />
                          ))}
                        </Box>

                        {/* Next Button */}
                        <button
                          onClick={handleNextRecipe}
                          style={{
                            backgroundColor: "white",
                            border: "2px solid black",
                            borderRadius: "50%",
                            width: "40px",
                            height: "40px",
                            cursor: "pointer",
                            fontSize: "20px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          ›
                        </button>
                      </Box>

                      {/* Ready Section (after carousel) */}
                      <Grid
                        container
                        justifyContent="center"
                        sx={{ marginTop: "100px", marginBottom: "60px" }}
                      >
                        <Grid size={{ xs: 12, md: 11, lg: 8, xl: 12 }}>
                          <Box
                            sx={{
                              position: "relative",
                              width: "100%",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <Box
                              component="img"
                              src={readyImage}
                              alt="Ready to get cooking"
                              sx={{
                                height: "auto",
                                display: "block",
                                borderRadius: "12px",
                                margin: "0 auto",
                                width: {
                                  xs: "100%",
                                  md: "1100px",
                                  lg: "1300px",
                                  xl: "1500px",
                                },
                              }}
                            />

                            <Box
                              component="button"
                              onClick={() => navigate("/signup")}
                              sx={{
                                position: "absolute",
                                top: "60%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                padding: {
                                  xs: "10px 20px",
                                  sm: "11px 25px",
                                  md: "12px 30px",
                                  lg: "13px 35px",
                                  xl: "14px 40px",
                                },
                                fontSize: {
                                  xs: "12px",
                                  sm: "13px",
                                  md: "14px",
                                  lg: "15px",
                                  xl: "16px",
                                },
                                fontFamily: "Inter",
                                fontWeight: 500,
                                color: "black",
                                backgroundColor: "white",
                                border: "1px solid black",
                                borderRadius: "10px",
                                cursor: "pointer",
                                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.12)",
                              }}
                            >
                              Start Cooking →
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                ) : null
              }
            />
            <Route
              path="/login"
              element={<LoginPage onLogin={handleLogin} />}
            />
            <Route
              path="/signup"
              element={<SignUpPage onSignUp={handleLogin} />}
            />
            <Route path="/home" element={<HomePage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/shopping-list" element={<ShoppingListPage />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
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
