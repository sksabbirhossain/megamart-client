import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useCart } from "../../contexts/CartContext";

const Order = () => {
  const { cart, increaseQty, decreaseQty, removeCart } = useCart();
  return (
    <Box>
      <Container>
        <Box boxShadow={2} p={1} borderRadius={1} mt={2}>
          <Typography variant="subtitle1" fontWeight={700}>
            Shopping Cart
          </Typography>
        </Box>
        <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "20px" }}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Product</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">Quantity</TableCell>
                  <TableCell align="left">Total Price</TableCell>
                  <TableCell align="left">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart?.map((product) => (
                  <TableRow>
                    <TableCell align="left">
                      <Box display="flex" alignItems="center">
                        <img
                          src={product.image}
                          alt=""
                          style={{ width: "50px" }}
                        />
                        <Typography
                          sx={{ display: { xs: "none", sm: "flex" } }}
                        >
                          {product.title}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="left">${product.price}</TableCell>
                    <TableCell align="left">
                      <Box display="flex" alignItems="center">
                        <span
                          onClick={() => decreaseQty(product)}
                          style={{ paddingRight: "10px", cursor: "pointer" }}
                        >
                          <ArrowLeftIcon />
                        </span>
                        <span>{product.quantity}</span>
                        <span
                          onClick={() => increaseQty(product)}
                          style={{ paddingLeft: "10px", cursor: "pointer" }}
                        >
                          <ArrowRightIcon />
                        </span>
                      </Box>
                    </TableCell>
                    <TableCell align="left">
                      ${product.price * product.quantity}
                    </TableCell>
                    <TableCell align="left">
                      <span onClick={() => removeCart(product)}>
                        <DeleteIcon color="primary" />
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box display="flex" justifyContent="flex-end" p={2}>
            <Box py={2}>
              <Typography variant="body2" textAlign="end" fontWeight={500}>
                Subtotal: $500
              </Typography>
              <Typography
                variant="body2"
                textAlign="end"
                fontWeight={500}
                pb={1}
              >
                Shipping fee: $0
              </Typography>
              <Box>
                <Divider />
              </Box>
              <Typography variant="body2" textAlign="end" fontWeight={700}>
                Total: 0
              </Typography>
              <Box display="flex" justifyContent="flex-end" mt={2}>
                <Button size="small">purchase</Button>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Order;
