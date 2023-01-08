import { Box, Container } from "@mui/material";
import React from "react";
import EssentialsCard from "../../components/EssentialsCard/EssentialsCard";
import HeadingContainer from "../../components/HeadingContainer/HeadingContainer";

const DailyEssentials = () => {
  return (
    <Box>
      <HeadingContainer title="Daily Essentials" url="/" />
      <Box mt={4}>
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "space-between",
            }}
          >
            <EssentialsCard />
            <EssentialsCard />
            <EssentialsCard />
            <EssentialsCard />
            <EssentialsCard />
            <EssentialsCard />
            <EssentialsCard />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default DailyEssentials;
