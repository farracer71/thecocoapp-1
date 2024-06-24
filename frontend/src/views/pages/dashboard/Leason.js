import React, { useState } from "react";
import { Box, Container, Grid, LinearProgress, Typography, styled } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { IoVolumeMediumOutline } from "react-icons/io5";
import { GoShareAndroid } from "react-icons/go";
import { IoChevronBackCircle } from "react-icons/io5";
import { IoChevronForwardCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


const style = {
  flexBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItem: "center",

    "@media(max-width:1000px)": {},
    "@media(max-width:767px)": {},
  },
  gridBox: {
    display: "grid",
    gap: "16px",
  },
  logoBox: {
    height: "-webkit-fill-available",
    alignItems: "end",
    display: "grid",
    justifyContent: "end",
  },
  CombineBox: {
    display: "grid",
    paddingBottom: "20px",
    alignItems: "flex-start",
    height: "calc(100vh - 130px)",
    "@media(max-width:900px)": {
      height: "100%",
    },
  },
  buttonHandle: {
    display: "flex",
    justifyContent: "end",
    gap: "8px",
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
  padding: "10px 25px",
}));
const AddImg = styled("img")(({ theme }) => ({
  width: "100%",
  maxHeight: "400px",
  "@media(max-width:900px)": {
    maxHeight: "300px",
  },
}));
const SchoolLogo = styled("img")(({ theme }) => ({
  width: "60px",
  height: "60px",
}));
const CustomLinearProgress = styled(LinearProgress)(({ progressColor }) => ({
  width: "-webkit-fill-available",
  height: "10px",
  backgroundColor: "rgba(216, 216, 218, 1)",
  borderRadius: "4px",
  "& .MuiLinearProgress-bar": {
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: "4px",
  },
}));
function Leason(props) {
  const navigate = useNavigate();
  let min = 1;
  let max = 3;
  const [progress, setProgress] = useState(1);

  const increaseProgress = () => {
     setProgress((prev) => (prev < max ? prev + 1 : max));
   };

  const decreaseProgress = () => {
     setProgress((prev) => (prev > min ? prev - 1 : min));
   };

  const calculateProgressValue = () => ((progress - min) / (max - min)) * 100;
  return (
    <MainBox
      style={
        progress === 3
          ? { background: "rgba(255, 246, 200, 1)" }
          : progress === 2
          ? { background: "rgba(240, 220, 255, 1)" }
          : { background: "rgba(255, 220, 234, 1)" }
      }
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={8}>
            <Box sx={style.CombineBox}>
              <Box sx={style.gridBox}>
                <Box sx={style.flexBox}>
                  <IoMdClose color="rgba(0, 0, 0, 1)" onClick={()=>{navigate("/dashboard")}} cursor={"pointer"}/>
                  <Box
                    sx={{ display: "flex", gap: "16px", alignItems: "center" }}
                  >
                    <IoVolumeMediumOutline color="rgba(0, 0, 0, 1)" />
                    <GoShareAndroid color="rgba(0, 0, 0, 1)" />
                  </Box>
                </Box>
                <Box sx={{}}>
                  <Typography variant="h1">What is Money?</Typography>
                  <Typography variant="h4" sx={{ marginTop: "14px" }}>
                    Money is a special tool we use to buy things we need and
                    want. It's like magic rupees that let us trade easily!
                  </Typography>
                </Box>
              </Box>
              <Box sx={style.logoBox}>
                <SchoolLogo alt="#" src="images/schoolLogo.png" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Box sx={{ background: "rgba(255, 255, 255, 1)" }}>
              <AddImg alt="" src="images/add.png" />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <InnerBox
        style={
          progress === 3
            ? { background: "rgba(232, 215, 124, 1)" }
            : progress === 2
            ? { background: "rgba(222, 179, 255, 1)" }
            : { background: "rgba(255, 179, 209, 1)" }
        }
      >
        <Container>
          <Grid container>
            <Grid item xs={8} sx={{alignItems: "center",
    display: "grid"}}>
              <Box
                sx={{
                  width: "100%",
                  textAlign: "center",
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <CustomLinearProgress
                  variant="determinate"
                  value={calculateProgressValue()}
                />
                <Typography variant="body2" color={"#fff"}>
                  {progress}/{max}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4} >
              <Box sx={style.buttonHandle}>
                <IoChevronBackCircle
                  onClick={decreaseProgress}
                  disabled={progress <= min}
                  color="rgba(255, 255, 255, 1)"
                  fontSize={"48px"}
                />

                <IoChevronForwardCircle
                  onClick={increaseProgress}
                  disabled={progress >= max}
                  color="rgba(255, 255, 255, 1)"
                  fontSize={"48px"}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </InnerBox>
    </MainBox>
  );
}

export default Leason;
