import React from "react";
import { Box, Container, Typography } from "@mui/material";
const style = {
  mainBox: {
    display: "grid",
    gap: "20px",
    margin: "60px auto",
    maxWidth: "660px",
     textAlign: {
                xs: "center",
                sm: "start",
              },
    "@media(max-width:1000px)": {
      margin: "50px auto",
    },
    "@media(max-width:767px)": {
      margin: "30px auto",
    },
  },
};
function Feedback() {
  return (
    <Container maxWidth="lg">
      <Box  sx={style.mainBox}>
        <img src="images/doubleCote.svg" alt="#" />
        <Typography variant="h2">
          “If we can change the beginning of the story, we can change the whole
          story”
        </Typography>
        <Typography variant="h2">
          That is what we dream of doing for millions of children worldwide.
        </Typography>
        <Typography variant="h2">— Soham Aher, Founder</Typography>
      </Box>
    </Container>
  );
}

export default Feedback;
