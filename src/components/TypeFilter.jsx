const types= [
        "Normal",
        "Fire",
        "Water",
        "Grass",
        "Electric",
        "Ice",
        "Fighting",
        "Poison",
        "Ground",
        "Flying",
        "Psychic",
        "Bug",
        "Rock",
        "Ghost",
        "Dragon",
        "Dark",
        "Steel",
        "Fairy",
    ];

const typeColors = {
  Normal: "bg-[#A8A77A]",
  Fire: "bg-[#EE8130]",
  Water: "bg-[#6390F0]",
  Grass: "bg-[#7AC74C]",
  Electric: "bg-[#F7D02C]",
  Ice: "bg-[#96D9D6]",
  Fighting: "bg-[#C22E28]",
  Poison: "bg-[#A33EA1]",
  Ground: "bg-[#E2BF65]",
  Flying: "bg-[#A98FF3]",
  Psychic: "bg-[#F95587]",
  Bug: "bg-[#A6B91A]",
  Rock: "bg-[#B6A136]",
  Ghost: "bg-[#735797]",
  Dragon: "bg-[#6F35FC]",
  Dark: "bg-[#705746]",
  Steel: "bg-[#B7B7CE]",
  Fairy: "bg-[#D685AD]",
};

export const TypeFilter = ({value, onChange}) => {
    

  return (
    <div className="space-x-4 space-y-4 py-2 px-4">
        {types.map((type) => (

            <button onClick={() => onChange(type)} key={type} className={`${value === type ?   "bg-white text-blue-500 border border-blue-500"
                : `${typeColors[type]} text-white border-transparent`} px-2 py-1 rounded-lg cursor-pointer transition-colors active:-translate-y-1`}>
                {type}
            </button>
        ))}
    </div>
  )
}
// "bg-blue-500 text-white" : "bg-white text-blue-500"} border px-3 py-1 rounded-lg cursor-pointer active:bg-blue-300