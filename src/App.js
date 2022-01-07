import {
  PokedexFrame,
  PokedexFrameLeft,
  PokedexFrameRight,
  ImageScreen,
  ImageScreenControls
} from './components';

function App() {
  return (
    <div className="home">
      <PokedexFrame>
        <PokedexFrameLeft>
          <ImageScreen/>
          <ImageScreenControls/>
        </PokedexFrameLeft>
        <PokedexFrameRight/>
      </PokedexFrame>
    </div>
  );
}

export default App;
