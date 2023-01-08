import { Box, Container } from "@mui/material";
import React from "react";
import BrandSlider from "../../components/BrandSlider/BrandSlider";
import HeadingContainer from "../../components/HeadingContainer/HeadingContainer";

const TopBrand = () => {
  return (
    <Box>
      <HeadingContainer title="Top Electronics Brands" url="/" />
      <Box mt={4}>
        <Container>
          <BrandSlider />
        </Container>
      </Box>
    </Box>
  );
};

export default TopBrand;
