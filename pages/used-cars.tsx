import type { NextPage } from "next";
import { Default } from "@layout/Default/Default";

const UsedCars: NextPage = () => {
  return (
    <Default>
      <h1 className="text-4xl font-black">Used Cars</h1>
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
export default UsedCars;
