import React, { useContext } from "react";
import Page from "../../../component/Page";
import SettingsContext from "src/context/SettingsContext";
import HeroSection from "./HeroSection";
import FreeFunEffective from "./FreeFunEffective";
import OurMission from "./OurMission";
import FeedBack from "./FeedBack";
import { Container } from "@mui/material";
import styled from "@emotion/styled";

const SectionFunBack = styled("section")(({ theme }) => ({
  backgroundImage: "url('/images/FreeFunBackground.png')",
  backgroundSize: "cover",
  paddingBottom: "5px",
  paddingTop: "40px",
  minHeight: "200px",
  width: "100%",
}));

function Home() {
  const { settings, saveSettings } = useContext(SettingsContext);

  const toggleTheme = () => {
    saveSettings({ theme: settings.theme === "LIGHT" ? "DARK" : "LIGHT" });
  };
  return (
    <Page title="Home">
      <Container maxWidth="lg">
        <section>
          <HeroSection />
        </section>
        <SectionFunBack>
          <FreeFunEffective />
        </SectionFunBack>
        <section>
          <OurMission />
        </section>
        <section>
          <FeedBack />
        </section>
      </Container>
    </Page>
  );
}

export default Home;
