import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeadingContainer from "../../components/HeadingContainer/HeadingContainer";
import ProductCart from "../../components/ProductCart/ProductCart";

const SmartPhone = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  //fetch products
  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProducts(data);
      });
  }, []);

  return (
    <Box>
      <HeadingContainer title="Grab the best on Smartphones" url="/" />

      <Box mt={4}>
        <Container>
          <Grid container spacing={2}>
            {loading
              ? "loading..."
              : products?.map((product) => (
                  <ProductCart product={product} key={product.id} />
                ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default SmartPhone;
