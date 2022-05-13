import { CarModelSuggestionModel } from "@czTypes/global.type";
import { useEffect, useState } from "react";
import faker from "@faker-js/faker";

faker.seed(3000);

const carModels: CarModelSuggestionModel[] = new Array(300).fill(0).map(() => {
  return {
    id: faker.database.mongodbObjectId(),
    text: `${faker.vehicle.manufacturer()} ${faker.vehicle.model()}`,
  };
});

/**
 *
 * @param queryString
 */
export const useCarModelAutocompleteSearch = (queryString: string | null) => {
  /** States */
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | Error | string>(null);
  const [suggestion, setSuggestion] = useState<CarModelSuggestionModel[]>([]);

  useEffect(() => {
    if (queryString !== null) {
      /** start fecthing data when queryString on change */
      setIsLoading(true);

      setTimeout(() => {
        const filteredData = carModels.filter((item: CarModelSuggestionModel) => {
          return item.text.toLowerCase().includes(queryString.toLowerCase());
        });

        if (filteredData.length === 0) {
          setSuggestion([{ id: "000", text: "No result" }]);
        }
        if (filteredData.length >= 1) {
          setSuggestion(filteredData);
        }

        setError(null);
        setIsLoading(false);
      }, 200);
    }
  }, [queryString]);

  return { isLoading, error, suggestion };
};
