import { getPokemonsHome } from '../services/getPokemonsHome'


export const comenzarDescargaPokemones = () => {
  return {
    type: "COMENZAR_DESCARGA_POKEMONS",
    isLoading:true
  }
}

export const descargaPokemonesExito = (pokemons) => {
  return {
    type: "DESCARGA_POKEMONS_EXITO",
    isLoading:false,
    pokemons: pokemons
  }
}

export const descargaPokemonesError = (error) => {
  return {
    type: "DESCARGA_POKEMONS_ERROR",
    isLoading:false,
    error
  }
}

// Thunk
export const buscarPokemons = (page) => {
  return async (dispatch, getState) => {
    dispatch(comenzarDescargaPokemones());
    try {
      const pokemons = await getPokemonsHome(page);
      dispatch(descargaPokemonesExito(pokemons));
    } catch (error) {
      dispatch(descargaPokemonesError(error));
    }
  };

}