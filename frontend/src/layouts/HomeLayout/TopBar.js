import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Drawer,
  Grid,
  List,
  ListItem,
  Typography,
  Container,
} from "@mui/material";
import { MdMenu as MenuIcon } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import Scroll from "react-scroll";
import { styled } from "@mui/system";
import { LuMail } from "react-icons/lu";

const ScrollLink = Scroll.Link;

const Root = styled("div")(({ theme }) => ({
  flexGrow: 1,
  display: "block",
  // [theme.breakpoints.down("md")]: {
  //   display: "none",
  // },
}));

const Root1 = styled("div")(({ theme }) => ({
  display: "none",
  // [theme.breakpoints.down("md")]: {
  //   display: "block",
  // },
}));

const ToolbarStyled = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const LinkButtonsDiv = styled(Box)({
  display: "flex",
  gap: "14px",
});

const Logo = styled("img")({
  maxWidth: "130px",
});

const RegisterBox = styled(Box)({
  display: "flex",
  gap: "15px",
});

const LinkButton = styled(Button)({
  fontFamily: "'Nunito Sans', sans-serif",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "16px",
  lineHeight: "16px",
  color: "#FDFAFE",
  cursor: "pointer",
});
const BackgroundDiv = styled("div")(({ theme }) => ({
  
  background: "#F3F8FB",
  padding: "8px",
}));

const styles = {
  flexDiv: {
    display: "flex",
    gap: "4px",
    alignItems: "center",
  },
};
export default function TopBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [openDrawerContent, setOpenDrawerContent] = useState(false);
  const [logIn, setLogIn] = useState(false);
  const [webPath, setWebPath] = React.useState(location.pathname);
  const token = localStorage.getItem("token");
  useEffect(() => {
    setWebPath(location.pathname);
  }, [location.pathname]);
  useEffect(() => {
    if (token) {
      setLogIn(true);
    } else {
      setLogIn(false);
    }
  }, [token]);

  const handleDrawerOpen = () => {
    setOpenDrawerContent(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawerContent(false);
  };

  return (
    <>
      <Root>
        <BackgroundDiv>
          <Container maxWidth="lg">
            <Box
              className="scroll-container"
              sx={{
                display: "flex",
                gap: "15px",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <marquee behavior="scroll" direction="left">
                <Box className="scroll-content">
                  <Box sx={styles.flexDiv}>
                    <LuMail />
                    <Typography variant="body1">hello@thecocoapp.com</Typography>
                  </Box>
                  <Box sx={styles.flexDiv}>
                    <LuMail />
                    <Typography variant="body1">
                      edupartners@thecocoapp.com
                    </Typography>
                  </Box>
                </Box>
              </marquee>
            </Box>
          </Container>
        </BackgroundDiv>
        <AppBar position="static" style={{ borderTop: "unset" }}>
          <Container maxWidth="lg">
            <ToolbarStyled style={{ padding: "0" }}>
              <Box display="flex" alignItems="center" gap="32px">
                <Logo
                  src="/images/Logo.png"
                  onClick={() => {
                    navigate("/");
                  }}
                />
                {/* <LinkButtonsDiv>
                <LinkButton>
                  <ScrollLink
                    onClick={() => {
                      navigate("/");
                    }}
                    smooth
                    duration={500}
                    to="home-bar"
                  >
                    <span style={webPath === "/" ? { color: "#D19A1D" } : {}}>
                      Home
                    </span>
                  </ScrollLink>
                </LinkButton>
              </LinkButtonsDiv> */}
              </Box>
              <RegisterBox>
                {logIn && <Button variant="contained">Dashboard</Button>}
                {!logIn && (
                  <Button
                    variant="contained"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Get Started
                  </Button>
                )}
                {/* {!logIn && (
                <Button
                  variant="contained"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Sign In
                </Button>
              )} */}
              </RegisterBox>
            </ToolbarStyled>
          </Container>
        </AppBar>
      </Root>
      <Root1>
        <AppBar position="static">
          <ToolbarStyled>
            <Box display="flex" alignItems="center" gap="32px">
              <Logo
                src="/images/Logo.png"
                onClick={() => {
                  navigate("/");
                }}
              />
            </Box>
            <MenuIcon
              onClick={handleDrawerOpen}
              style={{ cursor: "pointer", fontSize: "28px" }}
            />
            <Drawer
              sx={{
                "& .MuiDrawer-paper": {
                  width: 300,
                  padding: "24px 10px",
                  justifyContent: "space-between",
                },
              }}
              anchor="right"
              open={openDrawerContent}
              onClose={handleDrawerClose}
            >
              <Grid>
                <List>
                  <ListItem
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                    }}
                  >
                    <Logo
                      src="/images/Logo.png"
                      onClick={() => {
                        navigate("/");
                      }}
                    />
                    <MenuIcon
                      onClick={handleDrawerClose}
                      style={{ cursor: "pointer", fontSize: "28px" }}
                    />
                  </ListItem>
                  {/* <ListItem
                    onClick={() => {
                      navigate("/");
                    }}
                 
                  >
                    Home
                  </ListItem> */}
                  {logIn && (
                    <ListItem
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      Dashboard
                    </ListItem>
                  )}
                  {!logIn && (
                    <Button
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      {" "}
                      Get Started
                    </Button>
                  )}
                </List>
              </Grid>
            </Drawer>
          </ToolbarStyled>
        </AppBar>
      </Root1>
    </>
  );
}
