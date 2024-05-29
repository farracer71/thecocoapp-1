import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";


const StyledImg = styled("img")(({ theme }) => ({
  width: "-webkit-fill-available",
  height: "auto",
}));
const DeskTopTitle = styled("h1")(({ theme }) => ({
  fontWeight: 700,
  fontSize: "56px",
  fontFamily: "'Nunito Sans', sans-serif",
  margin:"0",
  lineHeight: "72px",
  [theme.breakpoints.down("md")]: {
    fontSize: "42px",
    lineHeight: "58px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
    lineHeight: "42px",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "26px",
    lineHeight: "38px",
  },
}));

function HeroSection() {
  return (
    <Box >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <DeskTopTitle>
            Helping children to make smart money choices !
          </DeskTopTitle>
          <Typography variant="h5">
            Start them young! Cocoapp equips children with the financial
            knowledge they need to make smart choices.
          </Typography>
          <Button variant="contained">Get started</Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <StyledImg alt="heroSection" src="images/boyWithMobile.svg" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeroSection;
