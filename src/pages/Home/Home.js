import { Stack } from "@mui/material";
import React from "react";
import Banner from "./Banner";
import SmartPhone from "./SmartPhone";
import TopCategory from "./TopCategory";

const Home = () => {
  return (
    <Stack spacing={6}>
      <Banner />
      <SmartPhone />
      <TopCategory />
    </Stack>
  );
};

export default Home;
