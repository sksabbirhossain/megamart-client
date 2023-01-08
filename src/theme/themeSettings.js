const color = {
  primary: "#f57224",
  text: "#666666",
  heading: "222222",
  border: "#EDEDED",
  background: "#F3F9FB",
  bg: "#00aeff0c",
};

export const themeSettings = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: color.primary,
            text: color.text,
            heading: color.heading,
            border: color.border,
            background: color.background,
            bg: color.bg,
          },
          background: {
            default: color.background,
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: color.primary,
            text: color.text,
            heading: color.heading,
            border: color.border,
            background: color.background,
          },
          background: {
            default: color.background,
          },
        }),
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: "1px solid",
          borderColor: color.primary,
          background: "#7693a5",
          color: "white",
          "&:hover": {
            background: "none",
            color: "#000",
            border: "1px solid",
            boxShadow: "none",
            borderColor: color.primary,
          },
        },
      },
      defaultProps: {
        disableRipple: true,
        variant: "contained",
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
});
