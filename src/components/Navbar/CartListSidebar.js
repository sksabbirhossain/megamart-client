import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, SwipeableDrawer, Typography } from "@mui/material";
import React from "react";
import { useCart } from "../../contexts/CartContext";

const CartListSidebar = ({ open, setOpen }) => {
  const { cart, removeCart, increaseQty, decreaseQty } = useCart();

  return (
    <SwipeableDrawer anchor="right" open={open} onClose={() => setOpen(false)}>
      <Box
        width={{ xs: "100vw", sm: "400px" }}
        height="100vh"
        role="presentation"
        sx={{ position: "relative" }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          fontSize={20}
          textAlign="center"
          boxShadow={1}
          py={1}
          position="sticky"
          top={0}
          zIndex={100}
          bgcolor="white"
          mx={2}
          mt={2}
        >
          Cart list
        </Typography>
        <Box
          sx={{ overflowY: "auto", overflowX: "hidden", height: "88%" }}
          p={2}
        >
          {cart?.map((item) => (
            <Box
              key={item.id}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              boxShadow={3}
              borderRadius="5px"
              py={1}
              px={1}
              mb={1}
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mr={1}
              >
                <span onClick={() => decreaseQty(item)}>
                  <ArrowDropUpIcon />
                </span>
                {item.quantity}
                <span onClick={() => increaseQty(item)}>
                  <ArrowDropDownIcon />
                </span>
              </Box>
              <img
                src={item.image}
                alt=""
                style={{ width: "50px", height: "60px", marginRight: "10px" }}
              />
              <Box>
                <Typography variant="body2">{item.title}</Typography>
                <Typography variant="body2" fontWeight={600}>
                  Price: ${item.price * item.quantity}
                </Typography>
              </Box>
              <Box sx={{ cursor: "pointer" }} onClick={() => removeCart(item)}>
                <DeleteIcon color="primary" />
              </Box>
            </Box>
          ))}
        </Box>
        <Box position="absolute" bottom="10px" width="90%" mt={4} mx={2}>
          <Button fullWidth>Order</Button>
        </Box>
      </Box>
    </SwipeableDrawer>
  );
};

export default CartListSidebar;
