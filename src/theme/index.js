// src/theme/index.js
import {
  createTheme as createMuiTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import _ from "lodash";

// Define your typography styles with unitless line heights
const typography = {
  h1: {
    fontWeight: 700,
    fontSize: 32,
    fontFamily: "'Nunito Sans', sans-serif",
    lineHeight: 1.5,
    "@media(max-width:767px)": {
      fontSize: "25px !important",
      lineHeight: 1.6,
      fontWeight: 600,
    },
  },
  h2: {
    fontWeight: 700,
    fontSize: 24,
    fontFamily: "'Nunito Sans', sans-serif",
    lineHeight: 1.2,
    "@media(max-width:767px)": {
      fontSize: "20px !important",
      lineHeight: 1.3,
      fontWeight: 600,
    },
  },
  h3: {
    fontWeight: 500,
    fontSize: 22,
    fontFamily: "'Nunito Sans', sans-serif",
    lineHeight: 1.2,
    "@media(max-width:767px)": {
      fontSize: "20px !important",
      lineHeight: 1.3,
    },
  },
  h4: {
    fontWeight: 500,
    fontSize: 20,
    fontFamily: "'Nunito Sans', sans-serif",
    lineHeight: 1.2,
    "@media(max-width:767px)": {
      fontSize: "18px !important",
      lineHeight: 1.3,
    },
  },
  h5: {
    fontWeight: 500,
    fontSize: 18,
    fontFamily: "'Nunito Sans', sans-serif",
    lineHeight: 1.67,
    "@media(max-width:767px)": {
      fontSize: "16px !important",
      lineHeight: 1.3,
    },
  },
  h6: {
    fontWeight: 300,
    fontSize: 16,
    fontFamily: "'Nunito Sans', sans-serif",
    lineHeight: 1.75,
    "@media(max-width:767px)": {
      fontSize: "14px !important",
      lineHeight: 1.3,
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
    fontSize: 20,
    fontWeight: 300,
    fontFamily: "'Nunito Sans', sans-serif",
    lineHeight: 1.79,
    "@media(max-width:767px)": {
      fontSize: "18px !important",
      lineHeight: 1.67,
    },
  },
  body2: {
    fontSize: 14,
    fontWeight: 400,
    fontFamily: "'Nunito Sans', sans-serif",
    lineHeight: "20px",
    "@media(max-width:767px)": {
      fontSize: "14px !important",
    },
  },
  subtitle1: {
    fontSize: 11,
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 300,
    lineHeight: 1.2,
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
            boxShadow: "none",
            border: "1px solid #E5E5E5",
            borderRadius: "0",
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
            borderRadius: "14px",
            boxShadow:
              "0px 2px 1px -1px rgba(0,0,0,0.06),0px 1px 1px 0px rgba(0,0,0,0.064),0px 1px 3px 0px rgba(0,0,0,0.06)",
          },
          elevation2: {
            backgroundColor: "rgba(255, 255, 255, 1)",
            borderRadius: "14px",
            boxShadow:
              "0px 2px 1px -1px rgba(0,0,0,0.06),0px 1px 1px 0px rgba(0,0,0,0.064),0px 1px 3px 0px rgba(0,0,0,0.06)",
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
            fontWeight: "800",
            fontSize: "16px",
            lineHeight: "22px",
            borderRadius: "8px",
            backgroundColor: "#FE8A36",
            "&:hover": {
              color: "#fff",
              backgroundColor: "#00BAF2",
            },
            "@media(max-width:767px)": {
              padding: "10px 15px",
            },
          },
          containedSecondary: {
            backgroundColor: "#FE8A36",
            padding: "8px 27px",
            filter: "drop-shadow(0px 13px 27px rgba(0, 0, 0, 0.25))",
            fontWeight: "800",
            fontSize: "16px",
            lineHeight: "22px",
            color: "#fff",
            borderRadius: "50px",
            border: "2px solid ",
            borderColor: "#FE8A36",
            "&:hover": {
              color: "#fff",
              background: "#00BAF2",
              borderColor: "#00BAF2",
              boxShadow:
                "0 1px 0 0 #fe5aeb, 0 -1px 0 0 #f4a91b, 1px 0 0 0 #fe5aeb, -1px 0 0 0 rgb(254 90 235), 1px -1px 0 0 #f4a91b, -1px 1px 0 0 rgb(254 90 235), 1px 1px 0 0 rgb(254 90 235), -1px -1px 0 0 rgb(244 168 26)",
              backgroundColor: "#00BAF2",
            },
            "@media(max-width:767px)": {
              padding: "10px 15px",
            },
          },
          contained: {
            background: "#FE8A36",
            fontWeight: "800",
            fontSize: "16px",
            lineHeight: "22px",
            "&.Mui-disabled": {
              backgroundColor: "rgba(0, 0, 0, 0.03) ",
            },
            "@media(max-width:767px)": {
              padding: "10px 15px",
            },
          },
          outlinedPrimary: {
            color: "#fff",
            backgroundColor: "#FE8A36",
            fontWeight: "800",
            fontSize: "16px",
            lineHeight: "22px",
            border: "2px solid #FE8A36 !important",
            "&:hover": {
              color: "#fff",
              boxShadow: "none !important",
              backgroundColor: "#FE8A36",
            },
            "@media(max-width:767px)": {
              padding: "10px 15px",
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
            boxShadow: "none",
            border: "1px solid #f1f1f1",
            borderRadius: "0",
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
            borderRadius: "14px",
            boxShadow:
              "0px 2px 1px -1px rgba(0,0,0,0.06),0px 1px 1px 0px rgba(0,0,0,0.064),0px 1px 3px 0px rgba(0,0,0,0.06)",
          },
          elevation2: {
            backgroundColor: "#232B3B",
            borderRadius: "14px",
            boxShadow:
              "0px 2px 1px -1px rgba(0,0,0,0.06),0px 1px 1px 0px rgba(0,0,0,0.064),0px 1px 3px 0px rgba(0,0,0,0.06)",
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
            color: "#fff",
            padding: "10px 35px",
            fontWeight: "800",
            fontSize: "16px",
            lineHeight: "22px",
            borderRadius: "8px",
            backgroundColor: "#FE8A36",
            "&:hover": {
              color: "#fff",
              backgroundColor: "#00BAF2",
            },
            "@media(max-width:767px)": {
              padding: "10px 15px",
            },
          },
          containedSecondary: {
            backgroundColor: "#FE8A36",
            padding: "8px 27px",
            filter: "drop-shadow(0px 13px 27px rgba(0, 0, 0, 0.25))",
            fontWeight: "800",
            fontSize: "16px",
            lineHeight: "22px",
            color: "#fff",
            borderRadius: "50px",
            border: "2px solid ",
            borderColor: "#FE8A36",
            "&:hover": {
              color: "#fff",
              background: "#00BAF2",
              borderColor: "#00BAF2",
              boxShadow:
                "0 1px 0 0 #fe5aeb, 0 -1px 0 0 #f4a91b, 1px 0 0 0 #fe5aeb, -1px 0 0 0 rgb(254 90 235), 1px -1px 0 0 #f4a91b, -1px 1px 0 0 rgb(254 90 235), 1px 1px 0 0 rgb(254 90 235), -1px -1px 0 0 rgb(244 168 26)",
              backgroundColor: "#00BAF2",
            },
            "@media(max-width:767px)": {
              padding: "10px 15px",
            },
          },
          contained: {
            background: "#FE8A36",
            fontWeight: "800",
            fontSize: "16px",
            lineHeight: "22px",
            "&.Mui-disabled": {
              backgroundColor: "rgba(0, 0, 0, 0.03) ",
            },
            "@media(max-width:767px)": {
              padding: "10px 15px",
            },
          },
          outlinedPrimary: {
            color: "#fff",
            backgroundColor: "#FE8A36",
            fontWeight: "800",
            fontSize: "16px",
            lineHeight: "22px",
            border: "2px solid #FE8A36 !important",
            "&:hover": {
              color: "#fff",
              boxShadow: "none !important",
              backgroundColor: "#FE8A36",
            },
            "@media(max-width:767px)": {
              padding: "10px 15px",
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
