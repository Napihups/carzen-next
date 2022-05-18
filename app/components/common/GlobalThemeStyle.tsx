import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Mulish",
  },
});

type GlobaThemeStyleProps = {
  children: React.ReactNode;
};
export const GlobaThemeStyle: React.FC<GlobaThemeStyleProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
    </ThemeProvider>
  );
};
