import { Box, styled } from "@mui/material";

export const FooterBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "auto",
  padding: "1rem 0",
  background: theme.palette.primary.bg,
}));
