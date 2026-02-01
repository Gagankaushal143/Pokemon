import { PokemonCard } from "./PokemonCard"

export const PokimonGrid = ({pokemon}) => {
    const getPokemonId = (url) =>{
        return url.split("/").filter(Boolean).pop()
    }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {pokemon.map((item, index) => (
            <PokemonCard key={index} name={item.name} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(item.url)}.png`}/>
        ))}
    </div>
  )
}
