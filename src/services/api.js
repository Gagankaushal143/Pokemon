export async function getPokemonList() {
   try{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)

    if(!res.ok){
        throw new Error("Failed to fetch Pokemon")
    }

    const data = await res.json();
    return data.results;
   }
   catch(err){
    console.error(err)
    throw err;
   }
}
