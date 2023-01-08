import { Box, Typography } from "@mui/material";
import React from "react";

const HomePageCategory = () => {
  return (
    <Box
      sx={{
        maxWidth: "120px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          borderRadius: "50%",
          border: "1px solid",
          background: "#EDEDED",
          marginBottom: "10px",
          "&:hover": {
            border: "1px solid #008ECC",
            cursor: "pointer",
          },
        }}
      >
        <img
          src="https://opsg-img-cdn-gl.heytapimg.com/epb/202205/26/siwzk8lPjtX8oR4P.png"
          alt="mobile"
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box>
        <Typography variant="body">Mobile</Typography>
      </Box>
    </Box>
  );
};

export default HomePageCategory;
