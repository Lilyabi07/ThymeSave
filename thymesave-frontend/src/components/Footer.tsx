import { Box, Grid, Typography, Link, Stack, Divider } from "@mui/material";

import logo from "../assets/logo-blue.png";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#F4FBFF",
        color: "#333",
        py: 3,
        px: { xs: 2, md: 5, xl: 35 },
        mt: "auto",
        borderTop: "1px solid #e0e0e0",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* main footer content */}
      <Grid
        container
        spacing={2}
        sx={{ mb: 2, width: "100%", justifyContent: "center" }}
      >
        <Grid size={{ xs: 12, md: 4, xl: 4 }}>
          <img
            src={logo}
            alt="ThymeSave Logo"
            style={{ width: "180px", height: "50px" }}
          />
          <Typography
            sx={{
              color: "#000000",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              mt: 0.5,
            }}
          >
            Montreal-based app simplifying meal planning and grocery management.
          </Typography>
        </Grid>

        {/* navigate section - full width on mobile, 2 columns on desktop */}
        <Grid size={{ xs: 6, md: 2, xl: 4 }}>
          <Box sx={{ height: "50px", display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "1.25rem",
                fontFamily: "'Inter', sans-serif",
                color: "#000000",
              }}
            >
              Navigate
            </Typography>
          </Box>
          <Stack spacing={0.5}>
            <Link
              href="/home"
              sx={{
                color: "#000000",
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Home
            </Link>
            <Link
              href="/contact"
              sx={{
                color: "#000000",
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              sx={{
                color: "#000000",
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Privacy Policy
            </Link>
          </Stack>
        </Grid>

        {/* my contact section - full width on mobile, takes remaining space on desktop */}
        <Grid size={{ xs: 6, md: 6, xl: 4 }}>
          <Box sx={{ height: "50px", display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "1.25rem",
                fontFamily: "'Inter', sans-serif",
                color: "#000000",
              }}
            >
              Contact Us
            </Typography>
          </Box>
          <Stack spacing={0.75}>
            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                color: "#000000",
              }}
            >
              <strong>Email:</strong>{" "}
              <Link
                href="mailto:contact@solicorp.com"
                sx={{
                  color: "#000000",
                  textDecoration: "none",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                contact@solicorp.com
              </Link>
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                color: "#000000",
              }}
            >
              <strong>Phone:</strong> (514) 284-9950
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
              }}
            >
              <strong>Address:</strong> 2210 Boul. Lapinière #200, Brossard J4W
              1M2
            </Typography>
          </Stack>
        </Grid>
      </Grid>

      <Divider sx={{ my: 0 }} />

      {/* damn footer */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          fontFamily: "'Inter', sans-serif",
          py: 1,
        }}
      >
        <Typography
          sx={{
            color: "#666",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.8rem",
          }}
        >
          © ThymeSave. All rights reserved.
        </Typography>
        <Link
          href="#top"
          sx={{
            color: "#000000ff",
            textDecoration: "none",
            fontSize: "0.8rem",
            fontFamily: "'Inter', sans-serif",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Back to top
        </Link>
      </Box>
    </Box>
  );
}
