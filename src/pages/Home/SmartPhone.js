import { Box, Container, Grid } from "@mui/material";
import React from "react";
import HeadingContainer from "../../components/HeadingContainer/HeadingContainer";
import ProductCart from "../../components/ProductCart/ProductCart";

const SmartPhone = () => {
  return (
    <Box>
      <HeadingContainer title="Grab the best on Smartphones" url="/" />
      <Box mt={4}>
        <Container>
          <Grid container spacing={2}>
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default SmartPhone;
