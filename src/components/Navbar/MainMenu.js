import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  Badge,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FlexBox } from "../../styles/common/Flexbox";
import { MainNavbar } from "../../styles/MainMenu/MainNavbar";
import { SearchInput } from "../../styles/MainMenu/SearchInput";

const MainMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
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
            MegaMart
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
            <NavLink to="/f">
              <Box display="flex">
                <Person2OutlinedIcon color="primary" /> SignUp/SignIn
              </Box>
            </NavLink>
            <NavLink to="/f">
              <Box display="flex">
                <ShoppingCartOutlinedIcon color="primary" /> Cart
              </Box>
            </NavLink>
          </Stack>
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
            <NavLink to="/">
              <Box display="flex">
                <Badge color="secondary" badgeContent={10}>
                  <ShoppingCartOutlinedIcon color="primary" />
                </Badge>
              </Box>
            </NavLink>
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
            <ListItemButton>
              <ListItemText secondary="Login" component={NavLink} to="/login" />
            </ListItemButton>
          </List>
        </Box>
      </SwipeableDrawer>
    </MainNavbar>
  );
};

export default MainMenu;
