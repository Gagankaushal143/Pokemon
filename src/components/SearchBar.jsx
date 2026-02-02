export const SearchBar = ({value, onChange}) => {
  return (
    <div>
        <input type="text" value={value} placeholder="Search Pokemon..." onChange={onChange} className="px-4 py-1 text-base w-3xs outline-none rounded-full border-2 border-amber-400 text-amber-400 placeholder:text-gray-400"/>
    </div>
  )
}
