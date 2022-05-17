import React from "react";

type DesignCanvasProps = {
  children: React.ReactNode;
};
export const DesignCanvas: React.FC<DesignCanvasProps> = ({ children }) => {
  return <div className="czDesignCanvas">{children}</div>;
};
