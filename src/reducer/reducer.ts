import { Reducer } from '@reduxjs/toolkit';
import { PersonajesActions } from '../actions/actions';
import { Pokemons } from '../interface/pokemons';

interface InitialState {
	page: number;
	pokemons: Pokemons[];
	isLoading: boolean;
	error: string;
}

const initialState:InitialState = {
	page: 0,
	pokemons: [],
	isLoading: false,
	error: "",
};

export const reducer:Reducer<InitialState, PersonajesActions> = (state = initialState, action) => {
	switch (action.type) {
		case "COMENZAR_DESCARGA_POKEMONS": {
			return {
				...state,
				isLoading: true,
			};
		}
		case "DESCARGA_POKEMONS_EXITO": {
			return {
				...state,
				isLoading: false,
				pokemons: [...action.payload.pokemons],
			};
		}

		case "DESCARGA_POKEMONS_ERROR": {
			return {
				...state,
				isLoading: false,
				pokemons: [],
				error: action.payload.error,
			};
		}

		default:
			return state;
	}
};
