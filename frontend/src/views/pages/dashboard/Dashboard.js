import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Page from "src/component/Page";

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
  BoxStyle: {
    padding: "34px",
    border: "2px solid rgba(216, 216, 216, 1)",
    borderRadius: "16px",
  },
  GapBox: {
    display: "flex",
    gap: "5px",
    alignItems: "center",
  },
  GridBox: {
    display: "grid",
    gap: "25px",
  },
  profileBox: {
    display: "flex",
    gap: "8px",
  },
  userBox: {
    width: "-webkit-fill-available",
    display: "grid",
    justifyContent: "center",
    padding: "20px",
    borderRadius: "10px",
    marginTop: "15px",
    border: "1px solid rgba(224, 220, 220, 1)",
  },
};

// const TitleWrapper = styled('img')(({ theme }) => ({
// }));

const StyledImg = styled("img")(({ theme }) => ({
  width: "-webkit-fill-available",
  height: "auto",
}));
const TaddyImg = styled("img")(({ theme }) => ({
  width: "115px",
  height: "auto",
}));
const ProfileImg = styled("img")(({ theme }) => ({
  width: "40px",
  height: "40px",
  margin:"0 12px"
}));
const CoinImg = styled("img")(({ theme }) => ({
  width: "24px",
  height: "24px",
}));
const AddImg = styled("img")(({ theme }) => ({
  width: "100%",
  maxHeight: "400px",
  "@media(max-width:900px)": {
    maxHeight: "300px",
  },
}));
function Dashboard() {
  const navigate = useNavigate();

  return (
    <Page title="Dashboard">
      <Container maxWidth="lg">
        <Box>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={7}>
              <Box>
                <StyledImg
                  alt="heroSection"
                  src="images/Module.png"
                  onClick={() => {
                    navigate("/leason");
                  }}
                />
              </Box>
              <Box>
                <Button
                  variant="contained"
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/");
                  }}
                >
                  Logout
                </Button>
              </Box>
            </Grid>
            <Grid item xs={5} sx={{ display: { xs: "none", sm: "block" } }}>
              <Box sx={style.GridBox}>
                <Box sx={style.BoxStyle}>
                  <Box
                    sx={{ display: "flex", gap: "10px", alignItems: "center" }}
                  >
                    <TaddyImg alt="" src="images/TaddyIcon.png" />
                    <Box>
                      <Typography variant="h3" fontWeight={"700"} mb={1}>
                        Hello Dhruv!
                      </Typography>
                      <Typography variant="h4">
                        Happy learning! Complete one level daily to top !
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={style.BoxStyle}>
                  <Typography variant="h4">Switch Profile</Typography>
                  <Box sx={style.profileBox}>
                    <Box
                      style={{
                        background: "rgba(255, 255, 255, 1)",
                      }}
                      sx={style.userBox}
                    >
                      <ProfileImg alt="" src="images/profile.png" />

                      <Box sx={style.GapBox}>
                        <Typography variant="body1">200</Typography>
                        <CoinImg alt="" src="images/Coin.png" />
                      </Box>
                    </Box>
                    <Box
                      style={{
                        background: "rgba(241, 245, 249, 1)",
                      }}
                      sx={style.userBox}
                    >
                      <ProfileImg alt="" src="images/profile.png" />

                      <Box sx={style.GapBox}>
                        <Typography variant="body1">200</Typography>
                        <CoinImg alt="" src="images/Coin.png" />
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box sx={style.BoxStyle}>
                  <AddImg alt="" src="images/add.png" />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Page>
  );
}

export default Dashboard;
