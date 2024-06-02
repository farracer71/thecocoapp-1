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
    display: "grid",
    gap: "16px",
    alignItem: "center",
    padding: "20px",
  },
  innerBox: {
    display: "grid",
    gap: "8px",
  },
};


const BoxCenter = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));
function AskQuestions() {
  const CardData = [
    {
      title: "Does Cocoapp for schools cost money?",
      cardText: "No Cocoapp for schools are 100% free",
    },
    {
      title: "Is Cocoapp for schools different from cocoapp?",
      cardText:
        "Cocoapp for schools is a free layer of management that sits on top of the Cocoapp financial learning app. You will get visibility on the progress of the students on Cocoapp",
    },
    {
      title: "What if my students are already using Cocoapp? ",
      cardText:
        "We have got you covered. Add your school ID to the existing account. to preserve existing students progress or get your students started fresh our quick account setup",
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box mt={2} mb={4}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <BoxCenter>
              <Typography variant="h1">Frequently asked questions</Typography>
            </BoxCenter>
          </Grid>

          <Grid item xs={12} >
            <Box mt={2} sx={style.mappedBox}>
              {CardData.map((value, index) => {
                return (
                  <Paper>
                    <Box sx={style.paperBox}>
                      <Box sx={style.innerBox}>
                        <Typography variant="h5" fontWeight={600}>
                          {value.title}
                        </Typography>
                        <Typography variant="h5" >
                          {value.cardText}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                );
              })}
              <Box>
                <Typography variant="h5">
                  Trouble finding the answer to your question? <span style={{color:"#00A9DC"}}>Contact us</span>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default AskQuestions;
