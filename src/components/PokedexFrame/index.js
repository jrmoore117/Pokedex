import { useEffect } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { getPokemon } from '../../reducers';

import { usePokemonStore } from '../../contexts/PokemonContext';

export const PokedexFrame = ({
   children,
   className,
   ...props
}) => {

   const [globalState, dispatch] = usePokemonStore();

   // Make API Call
   useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${globalState.pokemonNumber}`)
         .then(res => {
            // Set API Response to state
            dispatch(getPokemon(res.data));
         })
         .catch(err => console.log(err));
   }, [globalState.pokemonNumber]);

   const pokedexFrameClasses = classNames(
      'pokedex-frame',
      className
   );

   return (

      <div
         className={pokedexFrameClasses}
         {...props}
      >
         {children}
      </div>
   )
};

PokedexFrame.defaultProps = {
   className: ''
}

PokedexFrame.propTypes = {
   className: PropTypes.string
}
