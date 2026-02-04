import { useState } from "react";

const types= [
  "all","fire","water","grass","electric","ice","fighting","poison","ground","flying","psychic","bug","rock","ghost","dragon","dark","steel","fairy"
  ];


export const TypeFilter = ({value, onChange}) => {

  const [open, setOpen] = useState(false)
    

  return (
    <div>
        <button onClick={() => setOpen(!open)} className="px-4 py-2 bg-white border border-amber-500 text-black rounded-lg shadow-lg hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
          <span className="capitalize">
              {value === "all" ? "Filter" : value}
          </span>
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white border rounded-xl shadow-lg max-h-64 overflow-y-auto z-20">
            {types.map((type) => (
              <button key={type} onClick={() => {onChange(type); setOpen(false);}} className={`cursor-pointer block w-full text-left px-4 py-2 capitalize hover:bg-gray-100
                ${value === type ? "bg-gray-200 font-semibold" : ""}
              `}>
                {type}
              </button>
            ))}
          </div>
        )}

    </div>
  )
}
