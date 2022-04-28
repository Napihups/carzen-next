import type { NextPage } from "next";
import Head from "next/head";
import { Default } from "@layout/Default/Default";

const Articles: NextPage = () => {
  return (
    <Default>
      <Head>
        <title>Articles</title>
      </Head>
      <h1 className="text-4xl font-black">Articles</h1>
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

export default Articles;
