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
				pokemons: [...action.pokemons],
			};
		}

		case "DESCARGA_POKEMONS_ERROR": {
			return {
				...state,
				isLoading: false,
				pokemons: [],
				error: action.error,
			};
		}

		default:
			return state;
	}
};
