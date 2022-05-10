import React from "react";
import { BannerCarBlob } from "@element/BannerCarBlob/BannerCarBlob";

export const MainBanner: React.FC = () => {
  return (
    <div className="mainBanner">
      <div className="mainBanner__blob">
        <BannerCarBlob />
      </div>
    </div>
  );
};
