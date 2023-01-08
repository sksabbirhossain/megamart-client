import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };
  return (
    <Container sx={{ marginTop: "10px" }}>
      <Slider {...settings}>
        <Box
          sx={{
            background:
              "url(https://img.freepik.com/free-photo/front-view-woman-with-shopping-bag-concept_23-2148674158.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "5px",
            width: "100%",
            height: "250px",
            padding: "0 50px",
            display: "flex !important",
            alignItems: "center",
          }}
        >
          <Stack spacing={1} textAlign={{ xs: "center", sm: "start" }}>
            <Typography
              variant="body"
              component="h3"
              color="black"
              fontWeight="bold"
            >
              Best Deal Online on Smart watches
            </Typography>
            <Typography
              variant="h4"
              color="black"
              textTransform="uppercase"
              fontWeight="bold"
            >
              Smart Wearable.
            </Typography>
            <Typography
              variant="body"
              component="h3"
              color="black"
              fontWeight="bold"
            >
              UP to 80% OFF
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            background:
              "url(https://img.freepik.com/free-vector/shopping-time-banner-with-realistic-map-cart-gift-bags-vector-illustration_548887-120.jpg?w=2000)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "5px",
            width: "100%",
            height: "250px",
            padding: "0 50px",
            display: "flex !important",
            alignItems: "center",
          }}
        ></Box>
        <Box
          sx={{
            background:
              "url(https://img.freepik.com/free-vector/banner-online-offline-system_107791-2042.jpg?w=2000)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "5px",
            width: "100%",
            height: "250px",
            padding: "0 50px",
            display: "flex !important",
            alignItems: "center",
          }}
        ></Box>
        <Box
          sx={{
            background:
              "url(https://demo.codezeel.com/opencart/OPC06/OPC060143/image/cache/catalog/main-banner-1-1131x498.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "5px",
            width: "100%",
            height: "250px",
            padding: "0 50px",
            display: "flex !important",
            alignItems: "center",
          }}
        ></Box>
        <Box
          sx={{
            background:
              "url(https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-men-s-mechanical-watch-big-promotion-atmosphere-blue-background-image_157296.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "5px",
            width: "100%",
            height: "250px",
            padding: "0 50px",
            display: "flex !important",
            alignItems: "center",
          }}
        >
          <Stack spacing={1} textAlign={{ xs: "center", sm: "start" }}>
            <Typography
              variant="body"
              component="h3"
              color="white"
              fontWeight="bold"
            >
              Best Deal Online on Smart watches
            </Typography>
            <Typography
              variant="h4"
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
