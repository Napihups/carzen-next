import type { NextPage } from "next";
import { Default } from "@layout/Default/Default";

const Videos: NextPage = () => {
  return (
    <Default>
      <h1 className="text-4xl font-black">Videos</h1>
    </Default>
  );
};

/**
 *
 * @returns
 */
export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return { props: {} };
}
export default Videos;
