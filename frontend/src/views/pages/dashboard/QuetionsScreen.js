import React, { useState } from "react";
import { Box, Button, Container, Grid, LinearProgress, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { generateLabels } from "src/utils";
import { IoMdClose } from "react-icons/io";

const style = {
  flexBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItem: "center",
  },
  gridBox: {
    display: "grid",
    gap: "16px",
  },
  logoBox: {
    height: "-webkit-fill-available",
    alignItems: "end",
    display: "grid",
    justifyContent: "start",
  },
  CombineBox: {
    display: "grid",
    padding: "20px",
    gap: "25px",
    maxWidth: "700px",
  },
  buttonHandle: {
    display: "flex",
    justifyContent: "space-between",
    gap: "8px",
    alignItems: "center"
  },
  manageBoxHeight: {
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 238px)",
    display: "grid",
    overflow: "auto",
    "@media(max-width:767px)": { height: "calc(100vh - 285px)" },
  },
};
const MainBox = styled(Box)(({ theme }) => ({
  padding: "60px 0px 0 0px",
  height: "100vh",
  overflow: "auto",
  alignItems: "end",
  justifyContent: "space-between",
  alignContent: "space-between",
}));
const InnerBox = styled(Box)(({ theme }) => ({
  padding: "45px",
  borderTop: "2px solid #D8D8D8",
      position: "fixed",
    bottom: "0",
    width: "-webkit-fill-available",
  "@media(max-width:767px)": { padding: "22px" },
  "@media(max-width:1000px)": { padding: "30px" },
}));
const TakeImg = styled("img")(({ theme }) => ({
  width: "80px",
  height:"80px",
}));

const CustomLinearProgress = styled(LinearProgress)(({ progressColor }) => ({
  width: "-webkit-fill-available",
  height: "10px",
  backgroundColor: "rgba(216, 216, 218, 1)",
  borderRadius: "4px",
  "& .MuiLinearProgress-bar": {
    backgroundColor: "#FE8A36",
    borderRadius: "4px",
  },
}));
function QuetionsScreen() {
  const navigate = useNavigate();
    let min = 1;
    let max = 3;
    const [progress, setProgress] = useState(1);
    const nextProgress = () => {
      setProgress((prev) => (prev < max ? prev + 1 : min)); // Increment or reset to minimum
    };
  const[activeindex, setActiveIndex] =useState("");
  const [correctAns, setCorrectAns] = useState("");
  const calculateProgressValue = () => (((progress - min) / (max - min)) * 100) || 1;
  const labels = generateLabels(10);

  const items = [
    "Spend it all on the movie ",
    "Spend it all on treats ",
    "Buy a movie ticket and some snacks ",
  ];
  return (
    <MainBox>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sx={{ alignItems: "center", display: "grid" }}>
            <Box
              sx={{
                width: "100%",
                textAlign: "center",
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <IoMdClose
                color="#FE8A36"
                onClick={() => {
                  navigate("/dashboard");
                }}
                cursor={"pointer"}
              />
              <CustomLinearProgress
                variant="determinate"
                value={calculateProgressValue()}
              />
              <Typography variant="body2" color={"#FE8A36"}>
                {progress}/{max}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={style.manageBoxHeight}>
              <Box sx={style.CombineBox}>
                <Box sx={{ marginBottom: "20px" }}>
                  <Typography variant="h3">
                    It's Friday night, and you have 200 rupees. You'd love to
                    see the new movie with your friends (150 rupees) and also
                    want some popcorn and a drink (50 rupees).
                  </Typography>
                </Box>

                {items.map((values, index) => (
                  <Box
                    sx={{
                      display: "flex",
                      gap: "8px",
                      padding: "12px",
                      borderRadius: "8px",
                      border: "1px solid #D8D8D8",
                      cursor: "pointer",
                      background: activeindex === index ? "#E6F8FE" : "#fff",
                    }}
                    onClick={() => {
                      setActiveIndex(index);
                      if (index === 0) {
                        setCorrectAns(true);
                      } else {
                        setCorrectAns(false);
                      }
                    }}
                  >
                    <Typography variant="h4">{labels[index]}.</Typography>
                    <Typography variant="h4">{values}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <InnerBox
        style={
          correctAns === true
            ? { background: "#D7FFB8", marginTop: "55px" }
            : correctAns === false
            ? { background: "#FFCFCF", marginTop: "65px" }
            : { background: "#ffff" }
        }
      >
        <Container>
          <Grid spacing={4}>
            <Grid item xs={12}>
              <Box sx={style.buttonHandle}>
                {correctAns === true ? (
                  <Box
                    sx={{ display: "flex", gap: "8px", alignItems: "center" }}
                  >
                    <TakeImg src="images/correct.png" alt="" />
                    <Typography variant="h4" color={"#58CC02"}>
                      Great Job
                    </Typography>
                  </Box>
                ) : correctAns === false ? (
                  <Box
                    sx={{ display: "flex", gap: "8px", alignItems: "center" }}
                  >
                    <TakeImg src="images/wrong.png" alt="" />
                    <Box>
                      <Typography
                        variant="h4"
                        color={"#FF4B4B"}
                        fontWeight={600}
                      >
                        Try next time
                      </Typography>
                      <Typography
                        variant="h4"
                        color={"#FF4B4B"}
                        marginBottom={"8px"}
                        marginTop={"12px"}
                      >
                        Correct Answer: C
                      </Typography>
                      <Typography variant="h4" color={"#FF4B4B"}>
                        Spending all your money on one thing leaves no room for
                        the other.
                      </Typography>
                    </Box>
                  </Box>
                ) : (
                  <Box></Box>
                )}

                <Button
                  style={
                    correctAns === true
                      ? { background: "#58CC02" }
                      : correctAns === false
                      ? { background: "#FF4B4B" }
                      : { background: "#FE8A36" }
                  }
                  variant="contained"
                  onClick={() => {
                    nextProgress();
                    setCorrectAns("");
                    if(progress === max){
                      navigate("/dashboard")
                    }
                  }}
                >
                  Continue
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </InnerBox>
    </MainBox>
  );
}

export default QuetionsScreen;
