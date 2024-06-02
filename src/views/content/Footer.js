import React from "react";
import { Box, Container, Grid, Typography, Divider } from "@mui/material";
import styled from "@emotion/styled";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const style = {
  mappedBox: {
    display: "grid",
    gap: "30px",
  },
  paperBox: {
    display: "flex",
    gap: "16px",
    alignItem: "center",
    padding: "20px",
  },
  innerBox: {
    marginBottom:"35px"
  },
};
const FlexBox = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
const Logo = styled("img")({
  maxWidth: "130px",
});
const IconFlex = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "15px",
  alignItems: "center",
}));

function Footer() {


  return (
    <Container maxWidth="lg">
      <Box mt={2} mb={4}>
        <FlexBox style={style.innerBox}>
          <Box>
            <Logo src="images/Logo.png" alt="logo" />
            <Box sx={{ maxWidth: "430px" }}>
              <Typography variant="h6">
                Cocoapp is a financial education company. Making financial
                literacy a fun adventure with interactive games, rewards, and
                lessons that empower children to make smart choices.
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant="h4">About Us</Typography>
            <Typography variant="h6" sx={{marginTop:"24px"}}>Terms & Conditions</Typography>
            <Typography variant="h6">Privacy Policy</Typography>
            <Typography variant="h6">Contact us</Typography>
          </Box>
        </FlexBox>
        <Divider />
        <FlexBox style={{marginTop:"20px"}}>
          <Typography variant="h6">
            Copyright © 2024 Cocoapp Private Limited. All Rights Reserved
          </Typography>
          <IconFlex>
            <RiInstagramFill style={{ color: "#00A9DC" }} />
            <FaLinkedinIn style={{ color: "#00A9DC" }} />
            <FaYoutube style={{ color: "#00A9DC" }} />
          </IconFlex>
        </FlexBox>
      </Box>
    </Container>
  );
}

export default Footer;
