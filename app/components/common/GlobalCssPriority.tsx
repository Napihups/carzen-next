import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

type GlobalCssPriorityProps = {
  children: React.ReactNode;
};
export const GlobalCssPriority: React.FC<GlobalCssPriorityProps> = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
    </React.Fragment>
  );
};
