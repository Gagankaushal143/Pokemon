import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Loader } from "../components/Loader";

export const PokemonDetails = () => {

    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchDetails() {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

                const data = await res.json();
                setPokemon(data);
            }
            finally {
                setLoading(false)
            }
        }
        fetchDetails()
    }, [id])

    if (loading) return <Loader />

    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className="flex border items-center w-xl  px-8 py-4 rounded-xl shadow-2xl bg-pink-100" >
                <div className=" p-4 rounded-full bg-pink-50 border-4 border-pink-300">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-52" />
                </div>
                <div className="flex-1 pl-4 space-y-2 ml-2 card">
                    <h1 className="capitalize text-4xl text-black font-bold">{pokemon.name}</h1>
                    <p className="text-lg ">Height: {pokemon.height}ft</p>
                    <p className="text-lg ">Weight: {pokemon.weight}Kg</p>
                    <h1 className="text-lg">Abilities: </h1>
                    <p className="flex text-base">
                        {pokemon.abilities.map((a) => (
                            <p key={a.ability.name} className="capitalize">
                                {a.ability.name},
                            </p>
                        ))}
                    </p>
                </div>
            </div>
        </div>
    )
}
