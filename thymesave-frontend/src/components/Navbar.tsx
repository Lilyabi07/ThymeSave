import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { buttonStyle } from "../theme/style";

export default function Navbar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleNavClick = (page: string) => {
    navigate(`/${page}`);
  };

  return (
    <Stack
      direction={isMobile ? "column" : "row"}
      spacing={2}
      alignItems="center"
      justifyContent="center"
    >
      <Button
        onClick={() => handleNavClick("home")}
        color="inherit"
        sx={buttonStyle}
        disableRipple={true}
      >
        Home
      </Button>
      <Button
        onClick={() => handleNavClick("users")}
        color="inherit"
        sx={buttonStyle}
        disableRipple={true}
      >
        Users
      </Button>
      <Button
        onClick={() => handleNavClick("shopping-list")}
        color="inherit"
        sx={buttonStyle}
        disableRipple={true}
      >
        Shopping List
      </Button>
    </Stack>
  );
}
