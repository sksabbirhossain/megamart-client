import { Box, colors, styled } from "@mui/material";

export const HeadingBox = styled(Box)(({ theme }) => ({
  display: "flex",
  paddingBottom: "10px",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid",
  borderColor: theme.palette.primary.border,
  position: "relative",
  "& .MuiTypography-root::before": {
    content: '""',
    position: "absolute",
    width: "10%",
    height: "2px",
    bottom: "0",
    background: theme.palette.primary.main,
  },
}));
