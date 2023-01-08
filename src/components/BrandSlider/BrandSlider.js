import { Box } from "@mui/material";
import React from "react";
import Slider from "react-slick";

const BrandSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <Box pr={3}>
          <Box
            sx={{
              borderRadius: "10px",
              height: "150px",
              width: "100%",
            }}
          >
            <Box>
              <img
                src="https://images.indianexpress.com/2022/07/OnePlus-10T-alert-slider-hasselblad-25072022.jpg"
                style={{
                  width: "100%",
                  height: "150px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
                alt=""
              />
            </Box>
          </Box>
        </Box>
        <Box pr={3}>
          <Box
            sx={{
              borderRadius: "10px",
              height: "150px",
              width: "100%",
            }}
          >
            <Box>
              <img
                src="https://assets.mspimages.in/wp-content/uploads/2022/04/OnePlus-Nord-CE-2-Lite-2-1.jpg"
                style={{
                  width: "100%",
                  height: "150px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
                alt=""
              />
            </Box>
          </Box>
        </Box>
        <Box pr={3}>
          <Box
            sx={{
              borderRadius: "10px",
              height: "150px",
              width: "100%",
            }}
          >
            <Box>
              <img
                src="https://images.techadvisor.com/cmsdata/slideshow/3797756/oneplus_10_pro_review_10.jpg"
                style={{
                  width: "100%",
                  height: "150px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
                alt=""
              />
            </Box>
          </Box>
        </Box>
        <Box pr={3}>
          <Box
            sx={{
              borderRadius: "10px",
              height: "150px",
              width: "100%",
            }}
          >
            <Box>
              <img
                src="https://expertreviews.b-cdn.net/sites/expertreviews/files/2022/09/best_oneplus_phone_uk_2022_smartphones.jpg"
                style={{
                  width: "100%",
                  height: "150px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
                alt=""
              />
            </Box>
          </Box>
        </Box>
        <Box pr={3}>
          <Box
            sx={{
              borderRadius: "10px",
              height: "150px",
              width: "100%",
            }}
          >
            <Box>
              <img
                src="https://mygalaxy.fdl.com.bd/Galaxy-Tab-A---webslider---Jan-_22.png"
                style={{
                  width: "100%",
                  height: "150px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
                alt=""
              />
            </Box>
          </Box>
        </Box>
      </Slider>
    </div>
  );
};

export default BrandSlider;
