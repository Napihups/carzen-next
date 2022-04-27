import type { NextPage } from "next";
import { Default } from "@layout/Default/Default";
import { LandingTemplate } from "@template/LandingTemplate";

const Landing: NextPage = () => {
  return (
    <Default>
      <LandingTemplate />
    </Default>
  );
};

export default Landing;
