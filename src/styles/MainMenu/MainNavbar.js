import { Box, styled } from "@mui/material";

export const MainNavbar = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "60px",
  border: "1px solid",
  borderColor: theme.palette.primary.border,
}));
