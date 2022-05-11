import React from "react";
import { BannerCarBlob } from "@element/BannerCarBlob/BannerCarBlob";
import { SearchFormTab } from "@module/SearchFormTab/SearchFormTab";
import { SearchForm } from "@module/SearchForm/SearchForm";

export const MainBanner: React.FC = () => {
  return (
    <div className="mainBanner">
      <div className="mainBanner__blob">
        <BannerCarBlob />
      </div>
      <div className="mainBanner__searchform">
        <SearchFormTab />
        <SearchForm />
      </div>
    </div>
  );
};
