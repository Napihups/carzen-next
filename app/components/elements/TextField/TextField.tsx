import React, { InputHTMLAttributes } from "react";

type TFSize = "sm" | "md" | "lg";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  tfSize?: TFSize;
  withFocus?: boolean;
  inputClass?: string;
}

export const TextField: React.FC<TextFieldProps> = (props) => {
  const { className, tfSize = "md", withFocus = true, inputClass, ...rest } = props;
  return (
    <div className={`czTextFieldBase ${className}`}>
      <input className={`czTextField czTextField--${tfSize} ${withFocus ? "" : "wo-focus"} ${inputClass}`} {...rest} />
    </div>
  );
};
