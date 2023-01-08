import { Box, Container } from "@mui/material";
import React from "react";
import HeadingContainer from "../../components/HeadingContainer/HeadingContainer";
import HomePageCategory from "../../components/HomePageCategory/HomePageCategory";

const TopCategory = () => {
  return (
    <Box>
      <HeadingContainer title="Shop From Top Categories" url="/" />
      <Box mt={4}>
        <Container>
          <Box
            sx={{
              display: "flex",
              // justifyContent: "space-around",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <HomePageCategory />
            <HomePageCategory />
            <HomePageCategory />
            <HomePageCategory />
            <HomePageCategory />
            <HomePageCategory />
            <HomePageCategory />
            <HomePageCategory />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default TopCategory;
