import React, { useEffect, useState } from 'react'
import getPokemonList from '../../service/getPokemonList';

const Home = () => {
    const [pokemons, setPokemons] = useState([])
    
    useEffect(() => {
        const init = async () => {
            const pokemonsData = await getPokemonList();
            setPokemons(pokemonsData);
        };
        init();
    }, [])

    return ( 
        <div>{pokemons.map(pokemon =>(
            <>
            <div>{pokemon.name} {pokemon.weight}</div>
            <img src={pokemon.sprites.other["official-artwork"].front_default} alt='hola'></img>
            </>
            )
        )}</div>
     );
}
 
export default Home;