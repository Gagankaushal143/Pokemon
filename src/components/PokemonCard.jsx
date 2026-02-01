export const PokemonCard = ({name, image}) => {
  return (
    <div className="flex items-center justify-evenly">
        <div className="w-2xs border flex items-center justify-center flex-col bg-white rounded-xl shadow-md p-4 transition hover:scale-102">
            <img src={image} alt={name} />
            <h1 className="text-xl capitalize">{name}</h1>
        </div>
    </div>
  )
}
