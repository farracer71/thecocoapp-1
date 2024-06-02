import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";

const style = {
  paperBox: {
    display: "grid",
    gap: "16px",
    alignItem: "center",
    padding: "20px",
  },
  innerBox: {
    display: "flex",
    gap: "20px",
  },
  innerSmallBox: {
    display: "flex",
    gap: "12px",
  },
  customCoutBox: {
    background: "#B186F3",
    borderRadius: "50%",
    color: "#fff",
    width: "34px",
    height: "34px",
    textAlign: "center",
  },
};
const StyledImg = styled("img")(({ theme }) => ({
  width: "-webkit-fill-available",
  height: "auto",
}));

const BoxCenter = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));
const BorderCss = styled("div")(({ theme }) => ({
  borderLeft: "1px dashed #63B3ED",
  borderInlineWidth: "3px",
  marginLeft: "16px",
  marginTop: "8px",
  marginBottom: "8px",
  
}));
function GettingStarted() {
  const CardData = [
    {
      title: "Get in touch with us",
      subText: [
        "It all starts with a conversation! ",
        "Send us email at edupartners@thecocoapp.com",
        "Our representative will contact you shortly",
      ],
    },
    {
      title: "School verification",
      subText: [
        "You need to fill up some details of the school  ",
        "Verification is done within 1 working day",
        "After verification unique school ID is generated",
      ],
    },
    {
      title: "Get started with Cocoapp",
      subText: [
        "Teacher training is provided to get student started ",
        "Introduction of cocoapp to parents and students",
        "Periodically progress of the student is sent to you ",
      ],
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box mt={2} mb={4}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <BoxCenter>
              <Typography variant="h1">Getting Started Is Easy</Typography>
            </BoxCenter>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box mt={2}>
              <StyledImg alt="" src="images/GettingStarted.svg" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            {CardData.map((value, index) => {
              return (
                <Box mt={2}>
                  <Box sx={style.innerBox}>
                    <Box sx={style.customCoutBox}>{index + 1}</Box>
                    <Typography variant="h3" fontWeight={700}>
                      {value.title}
                    </Typography>
                  </Box>
                  <Box sx={style.innerBox}>
                    <BorderCss></BorderCss>
                    <Box
                      sx={{ marginLeft: "18px", display: "grid", gap: "5px", marginTop:"8px" }}
                    >
                      {value.subText.map((item) => {
                        return (
                          <Box sx={style.innerSmallBox}>
                            <img src="images/iconGreen.svg" alt="tick" />
                            <Typography variant="h6">{item}</Typography>
                          </Box>
                        );
                      })}
                    </Box>
                  </Box>
                </Box>
              );
            })}
            <Box mt={3}>
              <Button variant="contained">Get started</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default GettingStarted;
