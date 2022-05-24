import React, { useContext, createContext, ReactNode, useState } from "react";
import { SearchType } from "./CzSearchForm.types";

type ContextProps = {
  currentType: SearchType;
  setCurrentType: (curr: SearchType) => void;
};

const CzSearchFormContext = createContext<ContextProps>({
  currentType: SearchType.NEW,
  setCurrentType: () => {},
});

export const useCzSearchForm = () => useContext(CzSearchFormContext);

type ProviderProps = {
  children: ReactNode;
};

export const CzSearchFormProvider: React.FC<ProviderProps> = ({ children }) => {
  /**
   * This value determine which type of formshould be display and usable
   */
  const [currentType, setCurrentType] = useState<SearchType>(SearchType.NEW);

  const value = {
    currentType,
    setCurrentType,
  };

  return <CzSearchFormContext.Provider value={value}>{children}</CzSearchFormContext.Provider>;
};
