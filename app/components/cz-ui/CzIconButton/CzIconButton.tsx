import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import React from "react";

interface CzIconButtonProps extends IconButtonProps {}
export const CzIconButton: React.FC<CzIconButtonProps> = (props) => {
  const { children, ...rest } = props;
  return <IconButton {...props}>{props.children}</IconButton>;
};
