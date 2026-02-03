import { useEffect, useState } from "react"
import { Loader } from "../components/Loader"
import { getPokemonList } from "../services/api";
import { PokimonGrid } from "../components/PokimonGrid";
import { SearchBar } from "../components/SearchBar";
import { Navbar } from "../components/Navbar";
import { NotFound } from "../components/NotFound";
import { TypeFilter } from "../components/TypeFilter";


export const Home = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [type, setType] = useState("all");
    const [typePokemon, setTypePokemon] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search)
        }, 300);

        return () => clearTimeout(timer);
    }, [search])



    
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
    }, []);

    useEffect(() =>{
        async function fetchByType() {
            if(type === "all"){
                setTypePokemon([])
            }

            const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
            const data = await res.json()

            const names = data.pokemon.map(p => p.pokemon.name)

            setTypePokemon(names    )
        }
        fetchByType()
    }, [type]);

    if (loading) return <Loader />

    if (error) {
        return <p className="text-2xl text-red-400 text-center">{error}</p>
    }

    

    const filteredPokemon = pokemon.filter((item) => {
        const matchSearch = item.name.toLowerCase().includes(debouncedSearch.toLowerCase())
        
        const matchType = 
            type === "all" || typePokemon.includes(item.name)
        
        return matchSearch && matchType;
    })
    return (
        <div>
            <div>
                <div className="flex items-center justify-between px-4 py-3 bg-gray-500">
                    <Navbar value={search} onChange={(e) => setSearch(e.target.value)} />
                    <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                {/* <h1 className="px-8 py-4 text-3xl bg-gray-100 heading">Pokedox</h1> */}
                {/* <PokimonGrid pokemon={filteredPokemon} /> */}
                <TypeFilter value={type} onChange={setType}/>
                {filteredPokemon.length === 0 ? <NotFound message={"No Pokemon found!!"}/> : <PokimonGrid pokemon={filteredPokemon}/>}
                
            </div>
        </div>
    )
}
