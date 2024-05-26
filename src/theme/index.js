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
    fontFamily: "'Nunito Sans', sans-serif",
    lineHeight: 1.2, // Unitless line height
    "@media(max-width:767px)": {
      fontSize: "25px !important",
      lineHeight: 1.6, // Unitless line height
    },
  },
  h2: {
    fontWeight: 500,
    fontSize: 30,
    fontFamily: "'Nunito Sans', sans-serif",
    lineHeight: 1.2, // Unitless line height
    "@media(max-width:767px)": {
      fontSize: "23px !important",
      lineHeight: 1.3, // Unitless line height
    },
  },
  h3: {
    fontWeight: 500,
    fontSize: 24,
    fontFamily: "'Nunito Sans', sans-serif",
    lineHeight: 1.2, // Unitless line height
    "@media(max-width:767px)": {
      fontSize: "20px !important",
      lineHeight: 1.3, // Unitless line height
    },
  },
  h4: {
    fontWeight: 500,
    fontSize: 20,
    fontFamily: "'Nunito Sans', sans-serif",
    lineHeight: 1.2, // Unitless line height
    "@media(max-width:767px)": {
      fontSize: "18px !important",
      lineHeight: 1.3, // Unitless line height
    },
  },
  h5: {
    fontWeight: 500,
    fontSize: 18,
    fontFamily: "'Nunito Sans', sans-serif",
    lineHeight: 1.67, // Unitless line height
    "@media(max-width:767px)": {
      fontSize: "16px !important",
      lineHeight: 1.3, // Unitless line height
    },
  },
  h6: {
    fontWeight: 300,
    fontSize: 16,
    fontFamily: "'Nunito Sans', sans-serif",
    lineHeight: 1.75, // Unitless line height
    "@media(max-width:767px)": {
      fontSize: "14px !important",
      lineHeight: 1.3, // Unitless line height
    },
  },
  overline: {
    fontWeight: 500,
    fontFamily: "'Nunito Sans', sans-serif",
  },
  button: {
    textTransform: "capitalize",
    borderRadius: 27,
    fontFamily: "'Nunito Sans', sans-serif",
  },
  body1: {
    fontSize: 14,
    fontWeight: 300,
    fontFamily: "'Nunito Sans', sans-serif",
    lineHeight: 1.79, // Unitless line height
    "@media(max-width:767px)": {
      fontSize: "12px !important",
      lineHeight: 1.67, // Unitless line height
    },
  },
  body2: {
    fontSize: 12,
    fontWeight: 300,
    fontFamily: "'Nunito Sans', sans-serif",
    lineHeight: 1.5, // Unitless line height
  },
  subtitle1: {
    fontSize: 11,
    fontFamily: "'Nunito Sans', sans-serif",
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
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: "#fff",
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: "#000",
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          fullWidth: {
            borderRadius: "8px",
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: { borderColor: "#0B1426" },
          root: {
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#0B1426",
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: "rgba(255, 255, 255, 1)",
          },
          elevation2: {
            backgroundColor: "rgba(255, 255, 255, 1)",
          },
        },
      },
      MuiTable: {
        styleOverrides: {
          root: {
            borderRadius: "10px",
            border: "1px solid #E8E7E7",
          },
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            background: "transparent",
            borderTop: "1px solid #636262",
            "&:hover": {
              backgroundColor: "none",
            },
          },
        },
      },
      MuiTableBody: {
        styleOverrides: {
          root: {
            background: "#fff",
          },
        },
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            borderBottom: "1px solid #E8E7E7",
            "&:hover": {
              backgroundColor: "#ffffff14",
            },
            "&:last-child": {
              borderBottom: "none",
            },
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          head: {
            padding: "16px 16px",
            fontWeight: "500",
            backgroundColor: "#0B1426",
            color: "#fff",
            whiteSpace: "pre",
            fontSize: "14px",
            textAlign: "center ",
          },
          body: {
            color: "#0B1426",
            whiteSpace: "pre",
            fontSize: "14px",
            fontWeight: "500",
            textAlign: "center",
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          list: {
            outline: "0",
            background: "#ffffff",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          containedPrimary: {
            color: "#fff",
            padding: "10px 35px",
            fontWeight: "500",
            borderRadius: "8px",
            backgroundColor: "rgba(11, 20, 38, 1)",
            "&:hover": {
              color: "#000",
              backgroundColor: "rgba(11, 20, 38, 0.7)",
            },
          },
          containedSecondary: {
            backgroundColor: "rgba(0, 0, 0, 0.03);",
            padding: "8px 27px",
            filter: "drop-shadow(0px 13px 27px rgba(0, 0, 0, 0.25))",
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "21px",
            color: "#000000",
            borderRadius: "50px",
            border: "2px solid ",
            borderColor: "rgba(0, 0, 0, 0.03);",
            "&:hover": {
              color: "#000",
              background: "transparent",
              boxShadow:
                "0 1px 0 0 #fe5aeb, 0 -1px 0 0 #f4a91b, 1px 0 0 0 #fe5aeb, -1px 0 0 0 rgb(254 90 235), 1px -1px 0 0 #f4a91b, -1px 1px 0 0 rgb(254 90 235), 1px 1px 0 0 rgb(254 90 235), -1px -1px 0 0 rgb(244 168 26)",
              backgroundColor: "transparent",
            },
          },
          contained: {
            "&.Mui-disabled": {
              backgroundColor: "rgba(0, 0, 0, 0.03) ",
            },
          },
          outlinedPrimary: {
            color: "rgba(11, 20, 38, 1)",
            border: "2px solid rgba(11, 20, 38, 1) !important",
            "&:hover": {
              color: "#fff",
              boxShadow: "none !important",
              backgroundColor: "rgba(11, 20, 38, 1)",
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: "#000000",
            "& svg": {
              color: "#000000",
            },
          },
          MuiSvgIcon: {
            styleOverrides: {
              root: {
                color: "#000",
              },
            },
          },
        },
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
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: "#0B1426",
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: "#FFFFFF",
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          fullWidth: {
            borderRadius: "8px",
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: { borderColor: "#f7f7f7" },
          root: {
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#f7f7f7",
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: "rgba(23, 32, 49, 1)",
          },
          elevation2: {
            backgroundColor: "#232B3B",
          },
        },
      },
      MuiTable: {
        styleOverrides: {
          root: {
            border: "1px solid #E8E7E7",
          },
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            background: "transparent",
            borderTop: "1px solid #636262",
            "&:hover": {
              backgroundColor: "none",
            },
          },
        },
      },
      MuiTableBody: {
        styleOverrides: {
          root: {
            background: "#172031",
          },
        },
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            borderBottom: "1px solid #E8E7E7",
            "&:hover": {
              backgroundColor: "#ffffff14",
            },
            "&:last-child": {
              borderBottom: "none",
            },
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          head: {
            padding: "16px 16px",
            fontWeight: "500",
            backgroundColor: "#fff",
            color: "#0B1426",
            whiteSpace: "pre",
            fontSize: "14px",
            textAlign: "center ",
          },
          body: {
            color: "#fff",
            whiteSpace: "pre",
            fontSize: "14px",
            fontWeight: "500",
            textAlign: "center ",
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          list: {
            outline: "0",
            background: "#191919",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          containedPrimary: {
            color: "rgba(11, 20, 38, 1)",
            padding: "10px 35px",
            lineHeight: "21px",
            borderRadius: "8px",
            backgroundColor: "#fff",
            fontWeight: "600",
            "&:hover": {
              color: "#000",
              backgroundColor: "#fff",
            },
          },
          containedSecondary: {
            backgroundColor: "rgba(255, 255, 255, 0.04)",
            padding: "8px 27px",
            filter: "drop-shadow(0px 13px 27px rgba(0, 0, 0, 0.25))",
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "21px",
            color: "#ffffff",
            borderRadius: "50px",
            border: "2px solid ",
            borderColor: "rgba(255, 255, 255, 0.04)",
            "&:hover": {
              color: "#ffffff",
              background: "transparent",
              boxShadow:
                "0 1px 0 0 #ff00cd, 0 -1px 0 0 #7d00b9, 1px 0 0 0 #f5673f, -1px 0 0 0 #f5673f, 1px -1px 0 0 #f5673f, -1px 1px 0 0 #f5673f, 1px 1px 0 0 #f5673f, -1px -1px 0 0 #f5673f",
              backgroundColor: "transparent",
            },
          },
          contained: {
            "&.Mui-disabled": {
              backgroundColor: "rgba(255, 255, 255, 0.025) ",
              color: "#ffffff45",
            },
          },
          outlinedPrimary: {
            border: "1px solid rgba(255, 255, 255, 1) !important",
            fontWeight: "600",
            color: "#fff",
            "&:hover": {
              color: "#000",
              boxShadow: "none !important",
              backgroundColor: "#f5f5f5",
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: "#fff",
            "& svg": {
              color: "#fff",
            },
          },
          MuiSvgIcon: {
            styleOverrides: {
              root: {
                color: "#fff",
              },
            },
          },
        },
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
