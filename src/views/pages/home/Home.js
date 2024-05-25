import React, { useContext } from "react";
import Page from "../../../component/Page";
import SettingsContext from "src/context/SettingsContext";
import { Button, Typography } from "@mui/material";

function Home() {
  const { settings, saveSettings } = useContext(SettingsContext);

  const toggleTheme = () => {
    saveSettings({ theme: settings.theme === "LIGHT" ? "DARK" : "LIGHT" });
  };
  return (
    <Page title="Home">
      <Typography variant="h1">Current Theme: {settings.theme}</Typography>
      <Button variant="contained" onClick={toggleTheme}>
        Toggle Theme
      </Button>
    </Page>
  );
}

export default Home;
