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

    const ItemPerLoad = 20;
    const [visibleCount, setVisibleCount] = useState(ItemPerLoad)

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

                setTimeout(() => {
                    setPokemon(data);
                    setLoading(false);
                }, 700);
            }
            catch (err) {
                setError(err.message);
                setLoading(false)
            }
        }
        fetchPokemon();
    }, []);

    useEffect(() => {
        async function fetchByType() {
            if (type === "all") {
                setTypePokemon([]);
                return;
            }

            const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
            const data = await res.json()

            const names = data.pokemon.map(p => p.pokemon.name)

            setTypePokemon(names)
        }
        fetchByType()
    }, [type]);

    if (loading) {
        return <Loader />
    }

    if (error) {
        return <p className="text-2xl text-red-400 text-center">{error}</p>
    }


    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setVisibleCount(ItemPerLoad);
    };


    const filteredPokemon = pokemon.filter((item) => {
        const matchSearch = item.name.toLowerCase().includes(debouncedSearch.toLowerCase())

        const matchType =
            type === "all" || typePokemon.includes(item.name)

        return matchSearch && matchType;
    })

    const visiblePokemon = filteredPokemon.slice(0, visibleCount);


    return (
        <div>
            <div>
                <div className="text-center py-3 bg-gray-500 ">
                    <Navbar value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="flex items-center justify-between px-4 py-3 md:px-10 bg-gray-100">
                    <SearchBar value={search} onChange={handleSearchChange} />
                    <TypeFilter value={type} onChange={(newType) => {
                        setType(newType);
                        setVisibleCount(ItemPerLoad);
                    }
                    } />
                </div>
                {filteredPokemon.length === 0 ? <NotFound message={"No Pokemon found!!"} /> : <PokimonGrid pokemon={visiblePokemon} />}

                {visibleCount < filteredPokemon.length && (
                    <div className="w-full flex items-center justify-center py-4">
                        <button onClick={() => setVisibleCount(prev => prev + ItemPerLoad)} className="cursor-pointer px-6 py-2 bg-gray-300 text-base rounded-full hover:bg-gray-400 active:scale-95 transition">
                            Load More
                        </button>
                    </div>
                )}

            </div>
        </div>
    )
}
