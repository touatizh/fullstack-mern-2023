import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Pokemons = () => {

    const [pokemonsList, setPokemonsList] = useState(null)

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=870")
            .then(response => {setPokemonsList(response.data)})
            .catch(err => console.error("Error fetching data: ", err))

    }, [])
    
    return (
        <ul>
            {pokemonsList && pokemonsList.results.map((poki, index) => (
                <li key={index}>{poki.name}</li>
            ))}
        </ul>
    )
}

export default Pokemons