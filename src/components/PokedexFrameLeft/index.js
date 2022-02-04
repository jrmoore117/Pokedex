import classNames from 'classnames';
import PropTypes from 'prop-types';

import { usePokemonStore } from '../../contexts/PokemonContext';

export const PokedexFrameLeft = ({
   children,
   className,
   ...props
}) => {
   const [globalState] = usePokemonStore();

   const pokedexFrameLeftClasses = classNames(
      'pokedex-frame-left',
      className
   );

   console.log("pokemon from context", globalState.pokemon);
   
   return (
      <div
         className={pokedexFrameLeftClasses}
         {...props}
      >
         {children}
      </div>
   )
};

PokedexFrameLeft.defaultProps = {
   className: ''
}

PokedexFrameLeft.propTypes = {
   className: PropTypes.string
}
