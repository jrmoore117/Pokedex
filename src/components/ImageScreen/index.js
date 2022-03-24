import PropTypes from 'prop-types';

import { usePokemonStore } from '../../contexts/PokemonContext';

export const ImageScreen = ({
   className,
   ...props
}) => {

   const [globalState] = usePokemonStore();

   return (
      <div
         className="image-screen-container"
         {...props}
      >
         <div className="image-screen">
            <div className="image-screen-lights-container">
               <span className="image-screen-light"></span>
               <span className="image-screen-light"></span>
            </div>
            <div className="pokemon-image-container">
               <div className="pokemon-image">
                  <img
                     src={globalState.pokemon && globalState.pokemon.sprites.front_default}
                     alt="pokemon-sprite"
                     className="h-full"
                  />
               </div>
            </div>
            <div className="image-screen-widgets-container">
               <div className="light-widget"></div>               
               <div className="pokemon-name-widget">
                  {globalState.pokemon && globalState.pokemon.name.charAt(0).toUpperCase() + globalState.pokemon.name.substring(1)}
               </div>
               <div className="pokemon-menu-widget">
                  <span className="pokemon-menu-widget-line"></span>
                  <span className="pokemon-menu-widget-line"></span>
                  <span className="pokemon-menu-widget-line"></span>
                  <span className="pokemon-menu-widget-line"></span>
               </div>
            </div>
         </div>
      </div>
   )
};

ImageScreen.defaultProps = {
   className: ''
}

ImageScreen.propTypes = {
   className: PropTypes.string
}
