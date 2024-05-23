import React, { useContext } from "react";
import { Button, CssBaseline } from "@mui/material";
import SettingsContext from "./context/SettingsContext";

function App() {
  const { settings, saveSettings } = useContext(SettingsContext);

  const toggleTheme = () => {
    saveSettings({ theme: settings.theme === "LIGHT" ? "DARK" : "LIGHT" });
  };
  return (
    <div className="App">
      <div>
        <CssBaseline />
        <h1>Current Theme: {settings.theme}</h1>
        <Button variant="contained" onClick={toggleTheme}>
          Toggle Theme
        </Button>
      </div>
    </div>
  );
}

export default App;
