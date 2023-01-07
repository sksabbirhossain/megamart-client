import { Stack } from "@mui/material";
import React from "react";
import Banner from "./Banner";
import SmartPhone from "./SmartPhone";

const Home = () => {
  return (
    <Stack spacing={6}>
      <Banner />
      <SmartPhone />
    </Stack>
  );
};

export default Home;
