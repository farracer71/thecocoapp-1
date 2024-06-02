import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";

const StyledImg = styled("img")(({ theme }) => ({
  width: "-webkit-fill-available",
  height: "auto",
}));
const DeskTopTitle = styled("h1")(({ theme }) => ({
  fontWeight: 700,
  fontSize: "56px",
  fontFamily: "'Nunito Sans', sans-serif",
  margin: "0",
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

function CocoApp() {
  return (
    <Container maxWidth="lg">
      <Box mt={3} mb={3}>
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
              <StyledImg alt="heroSection" src="images/schoolTeacher.svg" />
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
            <Box sx={{ display: "grid", gap: "20px" }}>
              <DeskTopTitle>
                Cocoapp
                <br /> for Schools
              </DeskTopTitle>
              <Typography variant="h6">
                Teachers, we’re here to help you! Our free tools support your
                <br />
                students as they learn finance through the Cocoapp, both in and
                out
                <br /> of the classroom.
              </Typography>
              <Button
                variant="contained"
                sx={{ margin: { xs: "auto", sm:"0" }, width: "260px", } }
              >
                Contact us
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            <Box>
              <StyledImg alt="heroSection" src="images/schoolTeacher.svg" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default CocoApp;
