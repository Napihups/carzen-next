import type { NextPage } from "next";
import { Default } from "@layout/Default/Default";
import { LandingTemplate } from "@template/LandingTemplate";
import Head from "next/head";

const Landing: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carzen.sg</title>
      </Head>
      <Default>
        <LandingTemplate />
      </Default>
    </>
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
