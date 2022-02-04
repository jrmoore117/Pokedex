import {
  createContext,
  useContext,
  useReducer,
} from 'react';

const Store = createContext(undefined);

const PokemonStoreProvider = ({ children, reducer, initialState }) => {
   const [globalState, dispatch] = useReducer(reducer, initialState);

   return (
      <Store.Provider value={[globalState, dispatch]}>{children}</Store.Provider>
   );
}

const usePokemonStore = () => {
   const context = useContext(Store);
   if (context === undefined) {
      throw new Error("usePokemonStore must be used within a PokemonStoreProvider");
   }
   return context;
}

export { PokemonStoreProvider, usePokemonStore };
