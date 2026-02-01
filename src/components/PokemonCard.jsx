import { Link } from "react-router-dom"

export const PokemonCard = ({name, image, id}) => {
  return (
    <Link to={`/pokemon/${id}`}>
        <div className="flex items-center justify-evenly p-2">
            <div className="w-2xs flex items-center justify-center flex-col bg-white rounded-xl shadow-sm p-4 transition hover:scale-102 hover:shadow-xl shadow-neutral-600">
                <img src={image} alt={name} className="w-36"/>
                <h1 className="text-xl capitalize">{name}</h1>
            </div>
        </div>
    </Link>
  )
}
