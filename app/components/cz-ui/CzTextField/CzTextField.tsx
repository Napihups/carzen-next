import React from "react";
import Input, { InputProps } from "@mui/material/Input";

interface CzTextFieldProps extends InputProps {}

export const CzTextField = React.forwardRef<HTMLInputElement, CzTextFieldProps>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <Input
      {...rest}
      disableUnderline
      ref={ref}
      componentsProps={{ input: { tabIndex: 1 } }}
      fullWidth
      className={`czTextField__root ${className}`}
      classes={{ root: "", focused: "czTextField__focused" }}
    />
  );
});
CzTextField.displayName = "CzTextField";
