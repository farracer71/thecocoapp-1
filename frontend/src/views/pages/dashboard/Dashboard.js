import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
} from "@mui/material";
import styled from "@emotion/styled";

const style = {
  HandleMargin: {
    marginTop: "20px",
    marginBottom: "80px",
    minWidth: "260px",
    "@media(max-width:1000px)": {
      marginBottom: "60px",
    },
    "@media(max-width:767px)": {
      marginTop: "15px",
      marginBottom: "30px",
    },
  },
};

// const TitleWrapper = styled('img')(({ theme }) => ({
// }));

const StyledImg = styled("img")(({ theme }) => ({
  width: "-webkit-fill-available",
  height: "auto",
}));

function Dashboard() {
  
  return (
    <Container maxWidth="lg">
      <Box>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
          >
            <Box
            >
              <StyledImg alt="heroSection" src="images/Module.png" />
            </Box>
          </Grid>
        </Grid>
      </Box>
     
    </Container>
  );
}

export default Dashboard;
