import { CzSingleSelect } from "@cz-ui/CzSingleSelect/CzSingleSelect";

const vehicleTypes: string[] = [
  "Vehicle Type",
  "Mini",
  "Hatchback",
  "Sedan",
  "SUV",
  "MPV",
  "Convertible",
  "Wagon",
  "Luxury",
  "Antique",
  "Coupe",
  "Sport Car",
  "Super Car",
  "Hybrid Car",
  "Electric Car",
  "Diesel Car",
];

/** */
export const CzVehicleTypeSelect: React.FC = () => {
  return (
    <CzSingleSelect
      data={vehicleTypes}
      label="Vehicle Types"
      renderItemText={(item: string) => item}
      renderDisplay={(selected: string) => selected}
      shouldShowLabel={(data: string[], selected) => Boolean(data[0] !== selected)}
    />
  );
};
