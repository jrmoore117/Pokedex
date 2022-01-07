import PropTypes from 'prop-types';
import classNames from 'classnames';
import { PokemonProvider, usePokemonContext } from '../../contexts/PokemonContext';

export const PokedexFrame = ({
   children,
   className,
   ...props
}) => {
   const pokedexFrameClasses = classNames(
      'pokedex-frame',
      className
   );

   // Make API Call
   // Set API Response to PokemonProvider value
   // Access API response data through useContext anywhere else in the app
   
   return (
      <PokemonProvider value={null}>
         <div
            className={pokedexFrameClasses}
            {...props}
         >
            {children}
         </div>
      </PokemonProvider>
   )
};

PokedexFrame.defaultProps = {
   className: ''
}

PokedexFrame.propTypes = {
   className: PropTypes.string
}
