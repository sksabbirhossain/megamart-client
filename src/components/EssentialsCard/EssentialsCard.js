import { Box, Typography } from "@mui/material";
import React from "react";

const EssentialsCard = () => {
  return (
    <Box
      sx={{
        maxWidth: "150px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          borderRadius: "10px",
          border: "1px solid",
          background: "#EDEDED",
          marginBottom: "5px",
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
        <Typography variant="body2">Daily Essentials</Typography>
        <Typography variant="body" fontSize={16} fontWeight={500}>
          UP to 50% OFF
        </Typography>
      </Box>
    </Box>
  );
};

export default EssentialsCard;
