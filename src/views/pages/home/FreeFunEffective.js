import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";

const StyledImg = styled("img")(({ theme }) => ({
  width: "-webkit-fill-available",
  height: "auto",
}));
function FreeFunEffective() {

  const CardData = [
    {
      title: "Gamified modules",
      cardText:
        "It uses interactive games and engaging activities to make financial literacy fun. It's not just learning, it's an adventure!",
      img: "",
    },
    {
      title: "Bit-sized lessons",
      cardText:
        "Short, engaging lessons break down complex financial concepts into easy-to-understand chunks. No overwhelming information here!",
      img: "",
    },
    {
      title: "Practical based quizzes",
      cardText:
        "Its quizzes go beyond memorisation. They apply what you learn to real-world situations, helping you master financial skills. ",
      img: "",
    },
  ];

  return (
    <Box mt={2}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Box>
            <StyledImg alt="" src="images/mobileScreen.svg" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>

          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FreeFunEffective;
