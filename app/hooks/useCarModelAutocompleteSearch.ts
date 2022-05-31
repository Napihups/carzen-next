import { CarModelSuggestionModel } from "@czTypes/global.type";
import { useEffect, useState } from "react";
import lodash from "lodash";

/**
 *
 * @param queryString
 */
export const useCarModelAutocompleteSearch = (
  options: CarModelSuggestionModel[],
  queryString: string | null,
  stopFetch: boolean
) => {
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

        options.forEach((item: CarModelSuggestionModel) => {
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
  }, [options, queryString, stopFetch]);

  return { isLoading, error, suggestion };
};
