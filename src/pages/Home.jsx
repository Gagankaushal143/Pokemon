import { useEffect, useState } from "react"
import { Loader } from "../components/Loader"
import { getPokemonList } from "../services/api";
import { PokimonGrid } from "../components/PokimonGrid";
import { SearchBar } from "../components/SearchBar";


export const Home = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("")

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const data = await getPokemonList();
                setPokemon(data);
            }
            catch (err) {
                setError(err.message)
            }
            finally {
                setLoading(false)
            }
        }
        fetchPokemon();
    }, [])

    if (loading) return <Loader />

    if (error) {
        return <p className="text-2xl text-red-400 text-center">{error}</p>
    }

    const filteredPokemon = pokemon.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div>
            <div>
                <h1>Pokedox</h1>
                <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
                <PokimonGrid pokemon={filteredPokemon} />
            </div>
        </div>
    )
}
