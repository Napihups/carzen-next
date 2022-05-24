import { CzSingleSelect } from "@cz-ui/CzSingleSelect/CzSingleSelect";

const Categories = ["Categories", "PARF Car", "COE Car", "Consignment", "Direct Owner"];

export const CzCategorySelect: React.FC = () => {
  return (
    <CzSingleSelect
      data={Categories}
      label="Categories"
      renderItemText={(item: string) => item}
      renderDisplay={(selected: string) => selected}
      shouldShowLabel={(data: string[], selected) => Boolean(data[0] !== selected)}
    />
  );
};
