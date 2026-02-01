export const SearchBar = ({value, onChange}) => {
  return (
    <div>
        <input type="text" value={value} placeholder="Search Pokemon..." onChange={onChange} className="px-4 py-2 w-3xs outline-none rounded-full border"/>
    </div>
  )
}
