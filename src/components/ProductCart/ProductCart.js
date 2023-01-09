import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ProductCart = ({ product, loading }) => {
  return (
    <Grid item xs={12} sm={4} md={3} lg={2.4}>
      <Link to={`/product-details/${product.id}`}>
        <Card
          sx={{
            maxWidth: 345,
            height: 345,
            border: "1px solid",
            borderColor: "#bcdcdc",
            boxShadow: "none",
            position: "relative",
            "&:hover": {
              borderColor: "#008ECC",
              boxShadow: "0px 0px 4px",
            },
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={product.image}
            sx={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="body"
              fontWeight={600}
              fontSize="16px"
              pb={1}
              display="inline-block"
            >
              {product.title.substring(0, 15)}
            </Typography>
            <Typography gutterBottom variant="body2">
              {product.description.substring(0, 30)}...
            </Typography>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body2" fontWeight="bold">
                ${product.price}
              </Typography>
              <Typography variant="body2">
                <Rating
                  name="read-only"
                  value={product.rating.rate}
                  readOnly
                  size="small"
                />
              </Typography>
            </Box>
          </CardContent>
          <CardActions
            sx={{ position: "absolute", bottom: "0", width: "100%" }}
          >
            <Button
              size="small"
              fullWidth
              endIcon={<ShoppingCartOutlinedIcon />}
            >
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      </Link>
    </Grid>
  );
};

export default ProductCart;
