import { createContext, useContext } from "react";

const CitiesContext = createContext();

function CitiesPovider({ children }) {
  return <CitiesContext.Provider>{children}</CitiesContext.Provider>;
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error("You used context provider outside the scope");
  }
  return context;
}

export { CitiesPovider, useCities };
