import Button, { ButtonProps } from "@mui/material/Button";
import React from "react";

interface CzButtonProps extends Omit<ButtonProps, "classes"> {
  /** The text to be display in the button */
  text?: string;
}
export const CzButton: React.FC<CzButtonProps> = (props) => {
  const { text } = props;
  return (
    <Button
      {...props}
      disableRipple
      classes={{
        root: "czButton__root",
        sizeMedium: "czButton__medium",
        containedPrimary: "czButton__contained--primary",
      }}
    >
      {text}
    </Button>
  );
};
