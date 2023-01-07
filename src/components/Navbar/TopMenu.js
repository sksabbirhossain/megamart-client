import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { FlexBox } from "../../styles/common/Flexbox";

const TopMenu = () => {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#EDEDED",
      }}
    >
      <Container>
        <FlexBox justifyContent="space-between" height="30px">
          <Typography variant="body">
            Welcome to worldwide Megamart!
          </Typography>
          <Stack direction="row" spacing={4}>
            <Typography variant="body2" alignItems="center" display="flex">
              <LocationOnOutlinedIcon color="primary" />
              <span style={{ marginLeft: "10px" }}>Deliver to 423652</span>
            </Typography>
            <Typography variant="body2" alignItems="center" display="flex">
              <LocalShippingOutlinedIcon color="primary" />
              <span style={{ marginLeft: "10px" }}>Rrack your order</span>
            </Typography>
            <Typography variant="body2" alignItems="center" display="flex">
              <AcUnitOutlinedIcon color="primary" />
              <span style={{ marginLeft: "10px" }}>All Offers</span>
            </Typography>
          </Stack>
        </FlexBox>
      </Container>
    </Box>
  );
};

export default TopMenu;
