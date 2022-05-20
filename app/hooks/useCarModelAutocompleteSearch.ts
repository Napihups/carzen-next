import { CarModelSuggestionModel } from "@czTypes/global.type";
import { useEffect, useState } from "react";
import faker from "@faker-js/faker";
import lodash from "lodash";

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
export const useCarModelAutocompleteSearch = (queryString: string | null, stopFetch: boolean) => {
  /** States */
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | Error | string>(null);
  const [suggestion, setSuggestion] = useState<CarModelSuggestionModel[]>([]);

  useEffect(() => {
    if (queryString !== null && !stopFetch) {
      /** Start fetching data when queryString on change */
      setIsLoading(true);

      setTimeout(() => {
        const resultList: CarModelSuggestionModel[] = [];

        carModels.forEach((item: CarModelSuggestionModel) => {
          if (lodash.includes(item.text.toLowerCase(), queryString.toLowerCase())) {
            resultList.push(item);
          }
        });

        if (resultList.length === 0) {
          setSuggestion([{ id: "noresult", text: "No result" }]);
        }
        if (resultList.length >= 1) {
          setSuggestion(resultList);
        }

        setError(null);
        setIsLoading(false);
      }, 0);
    }
  }, [queryString, stopFetch]);

  return { isLoading, error, suggestion };
};
