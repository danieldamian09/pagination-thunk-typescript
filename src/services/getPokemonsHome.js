export const getPokemonsHome = async () => {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`;
	try {
		const response = await fetch(url);
    const results = await response.json();
    console.log(results.results);

		const pokemons = results.results.map((pokemon, index) => {
			return {
				id: index + 1,
				name: pokemon.name,
				image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
					index + 1
				}.svg`,
			};
		});

		return pokemons;
	} catch (error) {
		console.log(error);
	}
};
