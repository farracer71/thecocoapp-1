import React from "react";
import { Box, Typography, Container, Grid, } from "@mui/material";
import styled from "@emotion/styled";



const style = {
  mappedBox: {
    display: "grid",
    gap: "30px",
  },
  
};
const StyledImg = styled("img")(({ theme }) => ({
  width: "-webkit-fill-available",
  height: "auto",
}));
const CustomBox = styled("div")(({ theme }) => ({
  width: "-webkit-fill-available",
  padding: "20px",
  background: "#B186F3",
  borderRadius:"20px"
}));
function OurMission() {

    const CardData = [
      {
        text: "⭐ Access to the bit sized gamified lessons from experienced financial professionals",
      },
      {
        text: "⭐ Children learn techniques they can use in real life",
      },
      {
        text: "⭐ Practice quizzes and earns coins help you reach your financial goals faster",
      },
    ];
  return (
    <Container maxWidth="lg">
      <Box mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box mt={2}>
              <StyledImg alt="" src="images/ourMission.svg" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box mt={2} sx={style.mappedBox}>
              <CustomBox>
                <Box>🏆 Our Mission</Box>
                <Typography variant="h2" sx={{ color: "#fff" }}>
                  To make financial literacy accessible and engaging for all
                  children. We believe that it is a crucial life skill that
                  should be nurtured from a young age.
                </Typography>
              </CustomBox>
              <Box>
                <Typography variant="h2">
                  Cocoapp is more than just an app; it's a gateway to a brighter
                  financial future for children.
                </Typography>
                <Typography variant="h5">
                  The right support at the right time makes all the difference.
                </Typography>
              </Box>

              <Box sx={style.innerBox}>
                {CardData.map((value, index) => {
                  return <Typography variant="h6">{value.text}</Typography>;
                })}{" "}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default OurMission;
