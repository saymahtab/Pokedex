import React from 'react';
import { Link } from 'react-router-dom';

const PokemonsHome = ({pokemon, pokemonName, loading, typeColors}) => {

    const filteredPokemon = pokemon.filter(p => 
        p.name.toLowerCase().includes(pokemonName.toLowerCase())
    );

    if (loading) return <p>Loading...</p>;
    if (!filteredPokemon.length) return <p>Pokemon Not Found</p>;

    return (
        <div className='rounded-t-3xl bg-white w-11/12 mx-auto relative top-32 max-md:top-28'>
            <div className="container flex flex-wrap justify-center pt-1 items-center rounded-t-3xl bg-white w-full mx-auto relative top-7 max-md:top-1"
            style={{height: 'calc(100vh - 128px)', overflowY: 'auto', }}>
            {filteredPokemon.map((pokemon) => {
                const type = pokemon.types[0].type.name;
                const bgColor = typeColors[type] || '#A8A878';
              
                return (
                    <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
                        <div className="pokemon-card w-60 m-4 mt-0 p-5 max-md:p-2 rounded-3xl max-md:w-36 max-md:h-32 max-md:m-2 max-md:mt-2"
                             style={{ backgroundColor: bgColor }}>
                            <div className="poki-data text-center flex flex-col items-center w-full">
                                <div className="poki-name]">
                                    <h2 className="text-gray-800 font-bold text-3xl capitalize mb-1 max-md:text-sm max-md:mb-0">{pokemon.name}</h2>
                                </div>
                                <div className="poki-type flex flex-wrap justify-center gap-2 mb-1 p-5 max-md:p-1 max-md:mb-0">
                                    {pokemon.types.map((obj, idx) => (
                                        <p 
                                        key={idx} 
                                        className="type-badge max-md:py-0">
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
        </div>
    );
}

export default PokemonsHome;
