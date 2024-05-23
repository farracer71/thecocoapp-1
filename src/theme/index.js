// src/theme/index.js
import {
  createTheme as createMuiTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import _ from "lodash";

const baseOptions = {
  direction: "ltr",
  typography: {

  },
  components: {
    // Define your component overrides here
  },
};

const themesOptions = [
  {
    name: "LIGHT",
    palette: {
      mode: "light",
      primary: {
        main: "#0B1426",
      },
      secondary: {
        main: "#0B1426",
      },
      background: {
        default: "#F7F7F7",
        paper: "#FFFFFF",
      },
      text: {
        primary: "#000000",
        secondary: "#000000",
      },
    },
  },
  {
    name: "DARK",
    palette: {
      mode: "dark",
      primary: {
        main: "#FFFFFF",
      },
      secondary: {
        main: "#FFFFFF",
      },
      background: {
        default: "#0B1426",
        paper: "#232B3B",
      },
      text: {
        primary: "#FFFFFF",
        secondary: "#FFFFFF",
      },
    },
  },
];

export const createTheme = (config = {}) => {
  let themeOptions = themesOptions.find((theme) => theme.name === config.theme);

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    [themeOptions] = themesOptions;
  }

  let theme = createMuiTheme(
    _.merge({}, baseOptions, themeOptions, { direction: config.direction })
  );

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
