import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { HeadingBox } from "../../styles/common/HeadingBox";

const HeadingContainer = ({title, url}) => {
  return (
    <Box>
      <Container>
        <HeadingBox >
          <Typography variant="body" component="h3">
            {title}
          </Typography>
          <NavLink to={url}>
            <Box display="flex" alignItems="center">
              <span>View More</span>
              <ArrowForwardIosOutlinedIcon fontSize="" color="primary" />
            </Box>
          </NavLink>
        </HeadingBox>
      </Container>
    </Box>
  );
};

export default HeadingContainer;
