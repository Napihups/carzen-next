import type { NextPage } from "next";
import { Default } from "@layout/Default/Default";

const SellMyCar: NextPage = () => {
  return (
    <Default>
      <h1 className="text-4xl font-black">Sell My Car</h1>
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
export default SellMyCar;
