import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { FlexBox } from "../../styles/common/Flexbox";
import { MainNavbar } from "../../styles/MainMenu/MainNavbar";
import { SearchInput } from "../../styles/MainMenu/SearchInput";

const MainMenu = () => {
  return (
    <MainNavbar>
      <Container>
        <FlexBox justifyContent="space-between">
          <Typography variant="h5" fontWeight="bold" color="primary">
            MegaMart
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <SearchInput>
              <SearchOutlinedIcon color="primary" />
              <input
                type="search"
                name=""
                id=""
                placeholder="Search essentials , groceries and more..."
              />
              <ListOutlinedIcon color="primary" />
            </SearchInput>
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
        </FlexBox>
      </Container>
    </MainNavbar>
  );
};

export default MainMenu;
