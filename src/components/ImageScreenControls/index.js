import PropTypes from 'prop-types';

import { updatePokemonNumber } from '../../reducers';
import { usePokemonStore } from '../../contexts/PokemonContext';

export const ImageScreenControls = ({
   className,
   ...props
}) => {

   const [globalState, dispatch] = usePokemonStore();

   const nextPokemon = () => {
      dispatch(updatePokemonNumber(globalState.pokemonNumber + 1));
   }

   const previousPokemon = () => {
      dispatch(updatePokemonNumber(globalState.pokemonNumber - 1));
   }

   return (
      <div
         className="image-screen-controls-container"
         {...props}
      >
          <div className="play-button-control"></div>               
          <div className="select-button-control"></div>
          <div className="start-button-control"></div>
          <div className="directional-pad-controls">
            <span className="directional-pad-up"></span>
            <span onClick={nextPokemon} className="directional-pad-right"></span>
            <span className="directional-pad-down"></span>
            <span onClick={previousPokemon} className="directional-pad-left"></span>
          </div>
      </div>
   )
};

ImageScreenControls.defaultProps = {
   className: ''
}

ImageScreenControls.propTypes = {
   className: PropTypes.string
}
