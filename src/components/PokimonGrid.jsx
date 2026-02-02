import { PokemonCard } from "./PokemonCard"

export const PokimonGrid = ({pokemon}) => {
    const getPokemonId = (url) =>{
        return url.split("/").filter(Boolean).pop()
    }
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-4 place-items-center bg-amber-50">
        {pokemon.map((item, index) => (
            <PokemonCard key={index} name={item.name} id={getPokemonId(item.url)} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(item.url)}.png`}/>
        ))}
    </div>
  )
}
