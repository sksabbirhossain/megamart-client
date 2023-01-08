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

const ProductCart = () => {
  const [value, setValue] = React.useState(2);
  return (
    <Grid item xs={12} sm={4} md={3} lg={2.4}>
      <Card
        sx={{
          maxWidth: 345,
          border: "1px solid",
          borderColor: "#bcdcdc",
          boxShadow: "none",
          "&:hover": {
              borderColor: "#008ECC",
              boxShadow: "0px 0px 4px"
          },
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            Galaxy s22 Ultra
          </Typography>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" fontWeight="bold">
              $32999
            </Typography>
            <Typography variant="body2">
              <Rating name="read-only" value={2} readOnly size="small" />
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small" fullWidth endIcon={<ShoppingCartOutlinedIcon />}>
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCart;
