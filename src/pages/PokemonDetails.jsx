import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { Loader } from "../components/Loader";
import { pokemonCache } from "../services/pokemonCache";

export const PokemonDetails = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchDetails() {
            if(pokemonCache[id]){
                setPokemon(pokemonCache[id]);
                setLoading(false);
                return;
            }

            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await res.json();

            pokemonCache[id] = data;
            setPokemon(data);
            setLoading(false);
        }
        fetchDetails()
    }, [id])

    if (loading) return <Loader />

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl shadow-black overflow-hidden grid grid-cols-1 md:grid-cols-2 border-t">
                <button onClick={() => navigate(-1)} className="flex items-center gap-2 mb-4 text-gray-600 hover:text-black fixed top-4 left-4 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
                    ← Back
                </button>

                <div className="flex items-center justify-center bg-linear-to-br from-pink-100 to-pink-200 p-8">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-56 drop-shadow-xl" />
                </div>


                <div className="p-6 space-y-4 select-none">
                    <h1 className="text-3xl capitalize font-pattaya" >{pokemon.name}</h1>

                    <div className="flex gap-2">
                        {pokemon.types.map(t => (
                            <span key={t.type.name} className="px-3 py-1 rounded-full text-sm text-white bg-gray-600 capitalize">
                                {t.type.name}
                            </span>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <p><b>Height:</b> {pokemon.height}</p>
                        <p><b>Weight:</b> {pokemon.weight}</p>
                    </div>

                    <div>
                        <h1 className="font-semibold mb-2">Abilities</h1>
                        <div className="flex flex-wrap gap-2">
                            {pokemon.abilities.map(a => (
                                <span key={a.ability.name} className="px-3 py-1 bg-gray-200 rounded-full text-sm capitalize">
                                    {a.ability.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
