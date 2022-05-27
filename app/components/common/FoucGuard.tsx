import React, { ReactNode, useEffect } from "react";

type FoucGuardProps = {
  children: ReactNode;
  targetId: string;
};
export const FoucGuard: React.FC<FoucGuardProps> = ({ children, targetId }) => {
  useEffect(() => {
    const root = document.getElementById(targetId) as HTMLElement;
    if (root !== null) {
      root.classList.remove("hidden");
    }
  }, [targetId]);

  return (
    <div id={targetId} className="hidden">
      {children}
    </div>
  );
};
