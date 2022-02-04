import {
  ImageScreen,
  ImageScreenControls,
  PokedexFrame,
  PokedexFrameLeft,
  PokedexFrameRight,
} from './components';

import { reducer, initialState } from './reducers';
import { PokemonStoreProvider } from './contexts/PokemonContext';

function App() {
  return (
    <PokemonStoreProvider reducer={reducer} initialState={initialState}>
      <div className="home">
        <PokedexFrame>
          <PokedexFrameLeft>
            <ImageScreen/>
            <ImageScreenControls/>
          </PokedexFrameLeft>
          <PokedexFrameRight/>
        </PokedexFrame>
      </div>
    </PokemonStoreProvider>
  );
}

export default App;
