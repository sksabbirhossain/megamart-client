import { Box, styled } from "@mui/material";

export const SearchInput = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "40px",
  minWidth: "450px",
  background: theme.palette.primary.bg,
  borderRadius: "5px",
  padding: "0 5px",
  marginRight: "20px",
  "& .MuiSvgIcon": {
    background: "#000",
  },
  "& input": {
    width: "100%",
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    padding: "10px 5px",
  },
}));
