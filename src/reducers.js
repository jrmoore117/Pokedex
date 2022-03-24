export const actionTypes = {
  GET_POKEMON: 'GET_POKEMON',
  UPDATE_POKEMON_NUMBER: 'UPDATE_POKEMON_NUMBER'
}

export const initialState = {
  pokemon: null,
  pokemonNumber: 1,
};

export const getPokemon = (pokemon) => ({
  type: actionTypes.GET_POKEMON,
  pokemon: pokemon
});

export const updatePokemonNumber = (pokemonNumber) => ({
  type: actionTypes.UPDATE_POKEMON_NUMBER,
  pokemonNumber: pokemonNumber
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POKEMON:
      return {
        ...state,
        pokemon: action.pokemon
      };
    case actionTypes.UPDATE_POKEMON_NUMBER:
      return {
        ...state,
        pokemonNumber: action.pokemonNumber,
      }
    default:
      return state;
  }
};
