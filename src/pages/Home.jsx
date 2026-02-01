import { useEffect, useState } from "react"
import { Loader } from "../components/Loader"
import { getPokemonList } from "../services/api";
import { PokimonGrid } from "../components/PokimonGrid";
import { SearchBar } from "../components/SearchBar";
import { Navbar } from "../components/Navbar";
import { NotFound } from "../components/NotFound";


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
                <div className="flex items-center justify-between px-4 py-2 bg-gray-600 text-white">
                    <Navbar value={search} onChange={(e) => setSearch(e.target.value)} />
                    <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <h1>Pokedox</h1>
                {/* <PokimonGrid pokemon={filteredPokemon} /> */}
                {filteredPokemon.length === 0 ? <NotFound message={"No Pokemon found!!"}/> : <PokimonGrid pokemon={filteredPokemon}/>}
                
            </div>
        </div>
    )
}
