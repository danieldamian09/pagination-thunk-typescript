import {useEffect, useState} from "react";
import {getPokemonsHome} from "./services/getPokemonsHome";

function App() {
	const [pokemonsHome, setPokemonsHome] = useState([]);
	// Paginacion
	const [nextPage, setNextPage] = useState(0);

	useEffect(() => {
		getPokemonsHome(nextPage).then((pokemons) => setPokemonsHome(pokemons));
	}, [nextPage]);

	return (
		<div className="container mx-auto min-h-screen">
			<h1 className="text-white text-3xl text-center py-2">Pokemons</h1>
			<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
				{pokemonsHome.map((pokemon) => (
					<div key={pokemon.name} className="border p-4">
						<h2 className="text-white text-center py-3">{pokemon.name}</h2>
					</div>
				))}
			</div>
			{/* Paginacion */}
			<div className="w-full flex justify-between py-6">
				<button
					className="bg-blue-600 rounded-lg py-2 px-4 text-white"
					onClick={() => setNextPage((prev) => prev - 1)}
					disabled={nextPage === 0 ? true : false}
				>
					Anterior
				</button>
				<button
					className="bg-blue-600 rounded-lg py-2 px-4 text-white"
					onClick={() => setNextPage((prev) => prev + 1)}
				>
					Siguiente
				</button>
			</div>
		</div>
	);
}

export default App;
