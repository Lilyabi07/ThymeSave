export const buttonStyle = {
  textTransform: "none",
  fontFamily: "Inter",
  fontSize: { xs: "14px", md: "15px", xl: "16px" },
  position: "relative",
  bgcolor: "transparent",
  border: "none",
  outline: "none",

  "&.MuiButtonBase-root": {
    backgroundColor: "transparent !important",
  },

  "&:focus": {
    outline: "none",
  },

  "&:active": {
    backgroundColor: "transparent !important",
    outline: "none",
    border: "none",
  },

  "&::after": {
    content: '""',
    position: "absolute",
    width: 0,
    height: "2px",
    left: "50%",
    bottom: 0,
    bgcolor: "currentColor",
    transition: "all 0.3s ease",
    transform: "translateX(-50%)",
  },
  "&:hover::after": {
    width: "100%",
  },
};
