import React from 'react';
import { Link } from 'react-router-dom';

const PokemonsHome = ({pokemon, pokemonName, loading, typeColors}) => {

    const filteredPokemon = pokemon.filter(p => 
        p.name.toLowerCase().includes(pokemonName.toLowerCase())
    );
    
    if (loading) return <p>Loading...</p>;
    if (!filteredPokemon.length) return <p>Pokemon Not Found</p>;

    return (
        <div className="container mx-auto flex flex-wrap justify-center items-start my-5 gap-4">
            {filteredPokemon.map((pokemon) => {
                const type = pokemon.types[0].type.name;
                const bgColor = typeColors[type] || '#A8A878';
              
                return (
                    <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
                        <div className="pokemon-card"
                             style={{ backgroundColor: bgColor }}>
                            <div className="poki-data text-center flex flex-col items-center w-full">
                                <div className="poki-name mb-1">
                                    <h2 className="text-gray-800 font-bold text-3xl capitalize">{pokemon.name}</h2>
                                </div>
                                <div className="poki-type flex flex-wrap justify-center gap-2 mb-1 p-5">
                                    {pokemon.types.map((obj, idx) => (
                                        <p 
                                        key={idx} 
                                        className="type-badge">
                                            {obj.type.name}
                                        </p>
                                    ))}
                                </div>
                                <div className="poki-image flex items-center justify-center mb-3">
                                    <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} className="h-32" />
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    );
}

export default PokemonsHome;
