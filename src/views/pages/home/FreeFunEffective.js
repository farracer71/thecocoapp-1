import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";

const style = {
  mappedBox: {
    display: "grid",
    gap: "30px",
  },
  paperBox: {
    display: "flex",
    gap: "16px",
    alignItem: "center",
    padding:"20px"
  },
  innerBox:{
    display:"grid",
    gap:"8px"
  }
};
const StyledImg = styled("img")(({ theme }) => ({
  width: "-webkit-fill-available",
  height: "auto",
}));

const BoxCenter = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));
function FreeFunEffective() {
  const CardData = [
    {
      title: "Gamified modules",
      cardText:
        "It uses interactive games and engaging activities to make financial literacy fun. It's not just learning, it's an adventure!",
      img: "images/IconGrid.svg",
    },
    {
      title: "Bit-sized lessons",
      cardText:
        "Short, engaging lessons break down complex financial concepts into easy-to-understand chunks. No overwhelming information here!",
      img: "images/IconGrid1.svg",
    },
    {
      title: "Practical based quizzes",
      cardText:
        "Its quizzes go beyond memorisation. They apply what you learn to real-world situations, helping you master financial skills. ",
      img: "images/IconGrid2.svg",
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box mt={2} mb={4}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <BoxCenter>
              <Typography variant="h1">Free Fun Effective</Typography>
            </BoxCenter>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box mt={2}>
              <StyledImg alt="" src="images/mobileScreen.svg" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box mt={2} sx={style.mappedBox}>
              {CardData.map((value, index) => {
                return (
                  <Paper>
                    <Box sx={style.paperBox}>
                      <img src={value.img} alt="icon" />
                      <Box sx={style.innerBox}>
                        <Typography variant="h3">{value.title}</Typography>
                        <Typography variant="h6">{value.cardText}</Typography>
                      </Box>
                    </Box>
                  </Paper>
                );
              })}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <BoxCenter style={{marginTop:"20px"}}>
              <Button variant="contained">Get started</Button>
            </BoxCenter>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default FreeFunEffective;
