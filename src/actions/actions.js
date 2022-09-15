import { getPokemonsHome } from '../services/getPokemonsHome'


export const comenzarDescargaPokemones = () => {
  return {
    type: "COMENZAR_DESCARGA_POKEMONS",
  }
}

export const descargaPokemonesExito = (pokemons) => {
  return {
    type: "DESCARGA_POKEMONS_EXITO",
    pokemons: pokemons
  }
}

export const descargaPokemonesError = (error) => {
  return {
    type: "DESCARGA_POKEMONS_ERROR",
    error:error
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
			const errorMessage = new Error('No se encontró el pokemon');
      dispatch(descargaPokemonesError(errorMessage.message));
    }
  };

}