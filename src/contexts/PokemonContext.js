import { createContext, useContext } from "react";

const PokemonContext = createContext(undefined);

const PokemonProvider = ({ value, children }) => {
   return (
      <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
   );
}

const usePokemonContext = () => {
   const context = useContext(PokemonContext);
   if (context === undefined) {
      throw new Error("usePokemonContext must be used within a PokemonProvider");
   }
   return context;
}

export { PokemonProvider, usePokemonContext };
