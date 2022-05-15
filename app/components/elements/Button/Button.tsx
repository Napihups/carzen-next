import React, { ButtonHTMLAttributes } from "react";

/** */
type BtnVariant =
  | "primary"
  | "white"
  | "outline-primary"
  | "outline-white"
  | "link-white"
  | "dark"
  | "link-black"
  | "link-primary";
type BtnSize = "tiny" | "sm" | "md" | "lg" | "xl";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** */
  text?: string;
  /** */
  variant?: BtnVariant;
  /** */
  size?: BtnSize;
  /** */
  bar?: boolean;
  /** */
  onClick?: (e: React.MouseEvent) => void;
}
export const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  size = "md",
  bar = false,
  type = "button",
  onClick,
  className,
  ...btnHtmlProps
}) => {
  return (
    <button
      {...btnHtmlProps}
      className={`czButton ${bar ? "bar" : ""} czButton--${size} czButton-var--${variant} ${className}`}
      onClick={onClick}
    >
      <p className={`czButton__text--${size}`}>{text}</p>
    </button>
  );
};
