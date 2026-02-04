import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const PokemonCard = ({name, image, id}) => {

  const [types, setTYpes] = useState([]);

  useEffect(() =>{
    async function fetchTypes() {
      try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

        const data = await res.json();

        const typeNames = data.types.map(
          t=> t.type.name
        );
        setTYpes(typeNames)
      }
      catch(err){
        console.error(err)
      }
    }
    fetchTypes()
  }, [id]);

  return (
    <Link to={`/pokemon/${id}`} className="w-56">
        <div className="">
            <div className="flex items-center justify-center flex-col bg-linear-90 rounded-xl shadow-sm p-4 transition hover:border-t border-gray-500 hover:shadow-xl shadow-neutral-600 border-t bg-gray-100">
                <div className="bg-gray-200 w-full place-items-center rounded-2xl">
                  <img src={image} alt={name} className="w-36"/>
                </div>
                <h1 className=" text-[1.35rem] capitalize text-gray-700 ">{name}</h1>

                <div className="space-x-2">
                  {types.map((type) => (
                    <span key={type} className="px-2 py-0.5 text-sm text-gray-700 rounded-full bg-gray-200 capitalize">
                      {type}
                    </span>
                  ))}
                </div>
            </div>
        </div>
    </Link>
  )
}
