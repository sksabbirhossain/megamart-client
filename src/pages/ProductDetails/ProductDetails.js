import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import useProductDetails from "../../hooks/useProductDetails";

const ProductDetails = () => {
  const { id } = useParams();
  const { product } = useProductDetails(id);
  const {addToCart} = useCart()
  return (
    <Box>
      <Container>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} sm={5} md={6}>
            <Box>
              <img
                src={product.image}
                alt=""
                style={{ maxWidth: "100%", height: "450px" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={7} md={6}>
            <Box>
              <Typography variant="h5" fontWeight="bold">
                {product.title}
              </Typography>
              <Typography>{product.description}</Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="h5" fontWeight="bold">
                ${product.price}
              </Typography>
            </Box>
            <Box mt={2}>
              <Button onClick={()=>addToCart(product)}
                size="small"
                endIcon={<ShoppingCartOutlinedIcon />}
              >
                Add To Cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductDetails;
