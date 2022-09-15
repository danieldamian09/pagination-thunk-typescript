const initialState = {
	page: 0,
	pokemons: [],
	isLoading: false,
	error: "",
};

export const reducer = (state = initialState, action) => {
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
