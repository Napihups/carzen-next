import React, { InputHTMLAttributes } from "react";

type TFSize = "sm" | "md" | "lg";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  tfSize?: TFSize;
  withFocus?: boolean;
}

export const TextField: React.FC<TextFieldProps> = (props) => {
  const { className, tfSize = "md", withFocus = true, ...rest } = props;
  return (
    <input className={`czTextField czTextField--${tfSize} ${withFocus ? "" : "wo-focus"} ${className}`} {...rest} />
  );
};
