const color = {
  primary: "#008ECC",
  text: "#666666",
  heading: "222222",
  border: "#EDEDED",
  background: "#F3F9FB",
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
