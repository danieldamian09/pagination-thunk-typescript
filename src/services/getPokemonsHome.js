/**
 * It fetches a list of 10 pokemons from the pokeapi.co API, and returns the results.
 * @param page - The page number you want to get.
 * @returns An array of objects.
 */

export const getPokemonsHome = async (page) => {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`;
	try {
		const response = await fetch(url);
		const results = await response.json();
		return results.results;
	} catch (error) {
		if (response.status === 404) {
			throw new Error('No se encontró el pokemon');
		}
	}
};
