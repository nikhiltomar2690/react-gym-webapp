import React from "react";
import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: {
          lg: "212px",
          xs: "70px",
        },
        ml: {
          sm: "50px",
        },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#2A3950" fontWeight="600" fontSize="26px">
        FitFusion Club
      </Typography>
      <Typography
        fontWeight="700"
        sx={{
          fontSize: {
            lg: "44px",
            xs: "40px",
          },
        }}
        mb="24px"
        mt="30px"
      >
        Sweat Today, <br /> Shine Tomorrow
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        href="#exercises"
        sx={{
          backgroundColor: "#2A3950",
          padding: "10px",
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight="600"
        color="#2A3950"
        sx={{
          opacity: 0.1,
          display: {
            lg: "block",
            sm: "none",
          },
          fontSize: { lg: "200px", md: "200px", sm: "100px" },
        }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
