import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container sx={{ marginTop: "10px" }}>
      <Slider {...settings}>
        <Box
          sx={{
            background:
              "url(https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-men-s-mechanical-watch-big-promotion-atmosphere-blue-background-image_157296.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "110%",
            borderRadius: "5px",
            width: "100%",
            height: "250px",
            padding: "0 50px",
            display: "flex !important",
            alignItems: "center",
          }}
        >
          <Stack spacing={1}>
            <Typography
              variant="body"
              component="h3"
              color="white"
              fontWeight="bold"
            >
              Best Deal Online on Smart watches
            </Typography>
            <Typography
              variant="h3"
              color="white"
              textTransform="uppercase"
              fontWeight="bold"
            >
              Smart Wearable.
            </Typography>
            <Typography
              variant="body"
              component="h3"
              color="white"
              fontWeight="bold"
            >
              UP to 80% OFF
            </Typography>
          </Stack>
        </Box>
      </Slider>
    </Container>
  );
};

export default Banner;
