import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  Badge,
  Box,
  Container,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { FlexBox } from "../../styles/common/Flexbox";
import { MainNavbar } from "../../styles/MainMenu/MainNavbar";
import { SearchInput } from "../../styles/MainMenu/SearchInput";
import CartListSidebar from "./CartListSidebar";

const MainMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const { cart } = useCart();
  return (
    <MainNavbar>
      <Container>
        <FlexBox justifyContent="space-between">
          <Typography
            variant="h5"
            fontWeight="bold"
            color="primary"
            display="flex"
            alignItems="center"
          >
            <Box display={{ xs: "flex", md: "none" }}>
              <IconButton onClick={() => setOpenMenu(true)}>
                <MenuIcon color="primary" />
              </IconButton>
            </Box>
            <Link to="/">
              <Typography
                variant="h5"
                fontWeight="bold"
                color="primary"
                display="flex"
                alignItems="center"
              >
                MegaMart
              </Typography>
            </Link>
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            display={{ xs: "none", sm: "flex" }}
          >
            <SearchInput display={{ xs: "none", md: "flex" }}>
              <SearchOutlinedIcon color="primary" />
              <input
                type="search"
                name=""
                id=""
                placeholder="Search essentials , groceries and more..."
              />
              <ListOutlinedIcon color="primary" />
            </SearchInput>
            <Box display={{ xs: "flex", md: "none" }}>
              <IconButton>
                <SearchOutlinedIcon color="primary" />
              </IconButton>
            </Box>
            <NavLink to="/signin">
              <Box display="flex">
                <Person2OutlinedIcon color="primary" /> SignUp/SignIn
              </Box>
            </NavLink>
            <NavLink to="/order">Order</NavLink>
            <Box
              display="flex"
              sx={{ cursor: "pointer" }}
              onClick={() => setOpenCart(true)}
            >
              <Badge
                color="secondary"
                badgeContent={cart.length === 0 ? "0" : cart.length}
              >
                Cart <ShoppingCartOutlinedIcon color="primary" />
              </Badge>
            </Box>
          </Stack>

          {/* responsive menu */}
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            display={{ xs: "flex", sm: "none" }}
          >
            <NavLink to="/">
              <Box display="flex">
                <IconButton>
                  <SearchOutlinedIcon color="primary" />
                </IconButton>
              </Box>
            </NavLink>
            <Box
              display="flex"
              sx={{ cursor: "pointer" }}
              onClick={() => setOpenCart(true)}
            >
              <Badge
                color="secondary"
                badgeContent={cart.length === 0 ? "0" : cart.length}
              >
                <ShoppingCartOutlinedIcon color="primary" />
              </Badge>
            </Box>
          </Stack>
        </FlexBox>
      </Container>
      {/* mobile menu */}
      <SwipeableDrawer
        anchor="left"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
      >
        <Box pl={2} width="280px" role="presentation">
          <List>
            <ListItemButton component={NavLink} to="/signup">
              <ListItemText secondary="SignUp" />
            </ListItemButton>
            <ListItemButton component={NavLink} to="/signin">
              <ListItemText secondary="Login" />
            </ListItemButton>
          </List>
        </Box>
      </SwipeableDrawer>

      {/* cart items list */}
      <CartListSidebar open={openCart} setOpen={setOpenCart} />
    </MainNavbar>
  );
};

export default MainMenu;
