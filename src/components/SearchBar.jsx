import { FaSearch } from "react-icons/fa";

export const SearchBar = ({value, onChange}) => {
  return (
    <div className="relative">
      <div className="absolute top-3 left-3 text-amber-500"><FaSearch /></div>
        <input type="text" value={value} placeholder="Search Pokemon..." onChange={onChange} className="px-8 py-2 outline-none rounded-full border-2 border-amber-500 text-black placeholder:text-gray-400 w-48 md:w-56 text-sm"/>
    </div>
  )
}
