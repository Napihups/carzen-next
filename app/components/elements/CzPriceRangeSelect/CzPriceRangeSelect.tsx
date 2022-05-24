import { CzSingleSelect } from "@cz-ui/CzSingleSelect/CzSingleSelect";

type PriceRangeType = {
  values: number[];
  label: string;
};
const PriceRanges: PriceRangeType[] = [
  {
    values: [-1, -1],
    label: "Price Range",
  },
  {
    values: [0, 10000],
    label: "Below $10,000",
  },
  {
    values: [10001, 20000],
    label: "$10,001 - $20,000",
  },
  {
    values: [20001, 30000],
    label: "$20,001 - $30,000",
  },
  {
    values: [30001, 40000],
    label: "$30,001 - $40,000",
  },
  {
    values: [40001, 50000],
    label: "$40,001 - $50,000",
  },
  {
    values: [50001, 60000],
    label: "$50,001 - $60,000",
  },
  {
    values: [60001, 70000],
    label: "$60,001 - $70,000",
  },
  {
    values: [70001, 80000],
    label: "$70,001 - $80,000",
  },
  {
    values: [80001, 90000],
    label: "$80,001 - $90,000",
  },
  {
    values: [90001, 100000],
    label: "$90,001 - $100,000",
  },
  {
    values: [100001, 150000],
    label: "$100,001 - $150,000",
  },
  {
    values: [150001, 200000],
    label: "$150,001 - $200,000",
  },

  {
    values: [200001, Infinity],
    label: "Above $200,000",
  },
];

/** */
export const CzPriceRangeSelect: React.FC = () => {
  return (
    <CzSingleSelect
      data={PriceRanges}
      label="Price Range"
      renderItemText={(item: PriceRangeType) => item.label}
      renderDisplay={(selected: PriceRangeType) => selected.label}
      shouldShowLabel={(data: PriceRangeType[], selected) => Boolean(data[0].label !== selected.label)}
    />
  );
};
