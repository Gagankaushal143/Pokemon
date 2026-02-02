import { Link } from "react-router-dom"

export const PokemonCard = ({name, image, id}) => {
  return (
    <Link to={`/pokemon/${id}`} className="w-3xs">
        <div className="flex items-center justify-evenly">
            <div className="w-full flex items-center justify-center flex-col bg-linear-90 rounded-xl shadow-sm p-4 transition hover:border-t border-gray-500 hover:shadow-xl shadow-neutral-600 mt-8 ">
                <img src={image} alt={name} className="w-36"/>
                <hr className="w-56 text-gray-300"/>
                <h1 className="text-[1.35rem] capitalize text-gray-700 heading pt-3">{name}</h1>
            </div>
        </div>
    </Link>
  )
}
