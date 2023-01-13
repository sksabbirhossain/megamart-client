import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeadingContainer from "../../components/HeadingContainer/HeadingContainer";
import HomePageCategory from "../../components/HomePageCategory/HomePageCategory";

const TopCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  //fetch products
  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCategories(data);
      });
  }, []);

  return (
    <Box>
      <HeadingContainer title="Shop From Top Categories" url="/" />
      <Box mt={4}>
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {loading
              ? "loading..."
              : categories?.map((category, i) => (
                  <HomePageCategory category={category} key={i} />
                ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default TopCategory;
