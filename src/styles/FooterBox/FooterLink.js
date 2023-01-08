import { Box, styled } from "@mui/material";

export const FooterLink = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  "& a": {
    fontSize: "16px",
    fontWeight: "normal",
    marginBottom: "5px",
    transition: "all .5s",

    "&:hover": {
      marginLeft: "5px",
      color: theme.palette.primary.main,
    },
  },
}));
