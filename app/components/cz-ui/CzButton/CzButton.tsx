import Button from "@mui/material/Button";
import React from "react";

export const CzButton: React.FC = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      size="medium"
      fullWidth
      classes={{
        root: "czButton__root",
        sizeMedium: "czButton__medium",
        containedPrimary: "czButton__contained--primary",
      }}
    >
      Login
    </Button>
  );
};
