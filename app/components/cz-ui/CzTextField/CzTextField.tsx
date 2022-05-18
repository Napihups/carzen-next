import Input from "@mui/material/Input";
import React from "react";

export const CzTextField: React.FC = () => {
  return (
    <Input
      disableUnderline
      fullWidth
      placeholder="Enter Car make / model"
      classes={{ root: "czTextField__root", focused: "czTextField__focused" }}
    />
  );
};
