export const SearchBar = ({value, onChange}) => {
  return (
    <div>
        <input type="text" value={value} placeholder="Search Pokemon..." onChange={onChange}/>
    </div>
  )
}
