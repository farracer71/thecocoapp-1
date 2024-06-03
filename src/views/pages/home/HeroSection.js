import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";

const style = {
  HandleMargin: {
    marginTop: "20px",
    marginBottom: "80px",
    minWidth:"260px",
    "@media(max-width:1000px)": {
      marginBottom: "60px",
    },
    "@media(max-width:767px)": {
      marginTop: "15px",
      marginBottom: "30px",
    },
  },

  EnergyIconPosition: {
    position: "absolute",
    zIndex: -1,
    // top: "2%",
    "@media(min-width: 1200px)": {
      left: "-3%",
    },
    "@media(min-width: 992px) and (max-width: 1199px)": {
      left: "-3%",
    },
    "@media(min-width: 768px) and (max-width: 991px)": {
      left: "-3%",
    },
    "@media(max-width: 767px)": {
      left: "2%",
    },
  }
};

// const TitleWrapper = styled('img')(({ theme }) => ({
// }));


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
    <Container maxWidth="lg">
      <Box>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: {
                xs: "block",
                sm: "none",
              },
            }}
          >
            <Box>
              <StyledImg alt="heroSection" src="images/boyWithMobile.svg" />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              textAlign: {
                xs: "center",
                sm: "start",
              },
            }}
          >
            <img className="positionAbosolute EnergyIconPosition" src="images/energy-icon.svg" />
            <DeskTopTitle>
              Helping children to make smart money choices !
            </DeskTopTitle>
            <Typography variant="h5">
              Start them young! Cocoapp equips children with the financial
              knowledge they need to make smart choices.
            </Typography>
            <Button variant="contained" sx={style.HandleMargin}>
              Get started
            </Button>
            <img className="positionAbosolute StarIconPosition" src="images/star-icon.svg" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: {
                xs: "none",
                sm: "block",
                md: "block",
                lg: "block",
              },
            }}
          >
            <Box>
              <StyledImg alt="heroSection" src="images/boyWithMobile.svg" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default HeroSection;
