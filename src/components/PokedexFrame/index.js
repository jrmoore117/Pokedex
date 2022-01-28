import {
  useEffect,
  useState,
} from 'react';
import axios from 'axios';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { PokemonProvider } from '../../contexts/PokemonContext';

export const PokedexFrame = ({
   children,
   className,
   ...props
}) => {
   
   const [pokemon, setPokemon] = useState({});
   const [pokemonNumber, setPokemonNumber ] = useState(1);
   
   // Make API Call
   useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
         .then(res => {
            // Set API Response to state
            setPokemon(res.data);
         })
         .catch(err => console.log(err));
   }, [pokemonNumber]);

   const pokedexFrameClasses = classNames(
      'pokedex-frame',
      className
   );

   return (
      <PokemonProvider value={pokemon}>
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
