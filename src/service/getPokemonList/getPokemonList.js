const getPokemonByName = async (name) => {
  
  const response = await fetch(process.env.REACT_APP_URL_API+'/pokemon/'+name);
  const data = await response.json();
  return data;
}

const getPokemonList = async () => {
  
  const response = await fetch(process.env.REACT_APP_URL_API+'/pokemon');
  
  if(!response.ok){
    return [];
  }
  
  const data = await response.json();
  
  const promises = data.results.map(
      (pokemon)=>{
        return getPokemonByName(pokemon.name);
      }
  );

  const pokemonsData = await Promise.all(promises);
  return pokemonsData;
};
  
  
  export default getPokemonList;
  
