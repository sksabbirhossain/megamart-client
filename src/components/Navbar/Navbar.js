import { Box } from "@mui/material";
import React from "react";
import MainMenu from "./MainMenu";
import TopMenu from "./TopMenu";

const Navbar = () => {
  return (
    <Box sx={{
      position: "sticky",
      top: "0",
      zIndex: "100"
    }}>
      <TopMenu />
      <MainMenu />
    </Box>
  );
};

export default Navbar;
