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

/**
 *
 * @returns
 */
export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
  return { props: {} };
}
export default Landing;
