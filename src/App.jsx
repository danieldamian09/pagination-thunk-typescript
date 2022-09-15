import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {buscarPokemons} from "./actions/actions";

function App() {
	const [pagina, setPagina] = useState(0);

	const pokemonsHome = useSelector((state) => state.pokemons.pokemons);
	const load = useSelector((state) => state.pokemons.isLoading);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(buscarPokemons(pagina));
	}, [pagina]);

	return (
		<>
			<div className="container mx-auto min-h-screen">
				{load && <h1 className="text-white">Loading...</h1>}
				<h1 className="text-white text-3xl text-center py-2">Pokemons</h1>
				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
					{pokemonsHome?.map((pokemon) => (
						<div key={pokemon.name} className="border p-4">
							<h2 className="text-white text-center py-3">{pokemon.name}</h2>
						</div>
					))}
				</div>
				<div className="w-full flex justify-between py-6">
					<button
						className="bg-blue-600 rounded-lg py-2 px-4 text-white"
						onClick={() => setPagina((prev) => prev - 1)}
						disabled={pagina === 0 ? true : false}
					>
						Anterior
					</button>
					<button
						className="bg-blue-600 rounded-lg py-2 px-4 text-white"
						onClick={() => setPagina((prev) => prev + 1)}
					>
						Siguiente
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
