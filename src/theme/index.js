// src/theme/index.js
import {
  createTheme as createMuiTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import _ from "lodash";

// Define your typography styles with unitless line heights
const typography = {
  h1: {
    fontWeight: 500,
    fontSize: 40,
    fontFamily: "'Poppins', sans-serif",
    lineHeight: 1.2, // Unitless line height
    "@media(max-width:767px)": {
      fontSize: "25px !important",
      lineHeight: 1.6, // Unitless line height
    },
  },
  h2: {
    fontWeight: 500,
    fontSize: 30,
    fontFamily: "'Poppins', sans-serif",
    lineHeight: 1.2, // Unitless line height
    "@media(max-width:767px)": {
      fontSize: "23px !important",
      lineHeight: 1.3, // Unitless line height
    },
  },
  h3: {
    fontWeight: 500,
    fontSize: 24,
    fontFamily: "'Poppins', sans-serif",
    lineHeight: 1.2, // Unitless line height
    "@media(max-width:767px)": {
      fontSize: "20px !important",
      lineHeight: 1.3, // Unitless line height
    },
  },
  h4: {
    fontWeight: 500,
    fontSize: 20,
    fontFamily: "'Poppins', sans-serif",
    lineHeight: 1.2, // Unitless line height
    "@media(max-width:767px)": {
      fontSize: "18px !important",
      lineHeight: 1.3, // Unitless line height
    },
  },
  h5: {
    fontWeight: 500,
    fontSize: 18,
    fontFamily: "'Poppins', cursive",
    lineHeight: 1.67, // Unitless line height
    "@media(max-width:767px)": {
      fontSize: "16px !important",
      lineHeight: 1.3, // Unitless line height
    },
  },
  h6: {
    fontWeight: 300,
    fontSize: 16,
    fontFamily: "'Poppins', sans-serif",
    lineHeight: 1.75, // Unitless line height
    "@media(max-width:767px)": {
      fontSize: "14px !important",
      lineHeight: 1.3, // Unitless line height
    },
  },
  overline: {
    fontWeight: 500,
    fontFamily: "'Poppins', sans-serif",
  },
  button: {
    textTransform: "capitalize",
    borderRadius: 27,
    fontFamily: "'Poppins', sans-serif",
  },
  body1: {
    fontSize: 14,
    fontWeight: 300,
    fontFamily: "'Poppins', sans-serif",
    lineHeight: 1.79, // Unitless line height
    "@media(max-width:767px)": {
      fontSize: "12px !important",
      lineHeight: 1.67, // Unitless line height
    },
  },
  body2: {
    fontSize: 12,
    fontWeight: 300,
    fontFamily: "'Poppins', sans-serif",
    lineHeight: 1.5, // Unitless line height
  },
  subtitle1: {
    fontSize: 11,
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 300,
    lineHeight: 1.2, // Unitless line height
  },
};

const baseOptions = {
  direction: "ltr",
  typography,
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
