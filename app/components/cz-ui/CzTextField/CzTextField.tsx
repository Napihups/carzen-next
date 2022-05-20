import React from "react";
import Input, { InputProps } from "@mui/material/Input";

interface CzTextFieldProps extends InputProps {}

export const CzTextField = React.forwardRef<HTMLInputElement, CzTextFieldProps>((props, ref) => {
  return (
    <Input
      {...props}
      disableUnderline
      ref={ref}
      componentsProps={{ input: { tabIndex: 1 } }}
      fullWidth
      classes={{ root: "czTextField__root", focused: "czTextField__focused" }}
    />
  );
});
CzTextField.displayName = "CzTextField";
