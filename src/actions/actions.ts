import { ActionCreator, Action, ThunkAction } from '@reduxjs/toolkit'
import { Pokemons } from '../interface/pokemons'
import { getPokemonsHome } from '../services/getPokemonsHome'
import { IRootState } from '../store/store'

interface ComenzarDescargaPokemones extends Action{
    type: "COMENZAR_DESCARGA_POKEMONS",
}

interface DescargaPokemonesExito extends Action{
  type: "DESCARGA_POKEMONS_EXITO",
  payload: {
    pokemons: Pokemons[]
  }
}

interface DescargaPokemonesError extends Action{
  type: "DESCARGA_POKEMONS_ERROR",
  payload: {
    error: string
  }
}


export interface BuscarPokemons extends ThunkAction<void, IRootState, unknown, PersonajesActions>{}

const comenzarDescargaPokemones: ActionCreator<ComenzarDescargaPokemones> = () => {
  return {
    type: "COMENZAR_DESCARGA_POKEMONS",
  }
}

export const descargaPokemonesExito: ActionCreator<DescargaPokemonesExito> = (pokemons:Pokemons[]) => {
  return {
    type: "DESCARGA_POKEMONS_EXITO",
    payload: {
      pokemons
    }
  }
}

export const descargaPokemonesError:ActionCreator<DescargaPokemonesError> = (error:string) => {
  return {
    type: "DESCARGA_POKEMONS_ERROR",
    payload: {
      error
    }
  }
}


// Thunk
export const buscarPokemons = (page:number):BuscarPokemons  => {
  return async (dispatch, getState)=> {
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

export type PersonajesActions = ComenzarDescargaPokemones | DescargaPokemonesExito | DescargaPokemonesError 