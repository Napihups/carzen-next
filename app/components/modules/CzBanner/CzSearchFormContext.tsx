import React, { createContext, useContext } from "react";

type ContextProps = {
  onSubmit: () => void;
};
const CzSearchFormContext = createContext<ContextProps>({ onSubmit: () => {} });

export const useCzSearchFormContext = () => {
  return useContext(CzSearchFormContext);
};

type ProviderProps = {
  children: React.ReactNode;
};
export const CzSearchFormProvider: React.FC<ProviderProps> = ({ children }) => {
  const onSubmit = () => {
    console.log("Search Form on Submit ");
  };
  const value = {
    onSubmit,
  };
  return <CzSearchFormContext.Provider value={value}>{children}</CzSearchFormContext.Provider>;
};
