import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons'; 

const Pokemon = ({ pokemon, typeColors }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const selectedPokemon = pokemon.find(p => p.id === parseInt(id));

    if (!selectedPokemon) return <p>Pokemon not found</p>;

    const type = selectedPokemon.types[0].type.name;
    const bgColor = typeColors[type] || '#A8A878';

    const handleNext = () => {
        const nextId = parseInt(id) + 1;
        if (nextId <= pokemon.length) {
            navigate(`/pokemon/${nextId}`);
        }
    };

    const handleBack = () => {
        const prevId = parseInt(id) - 1;
        if (prevId > 0) {
            navigate(`/pokemon/${prevId}`);
        }
        else {
            navigate(`/`)
        }
    };

    return (
        <div className="pokemon-container min-h-screen p-6 w-screen flex items-center justify-center"
            style={{backgroundColor: bgColor}}>
            <button onClick={handleBack} className="hidden md:flex absolute left-4 md:left-12 top-1/2 transform -translate-y-1/2">
                <FontAwesomeIcon 
                    icon={faLessThan}
                    className='text-3xl text-white hover:text-zinc-200'
                />
            </button>
            <div className="pokemon-content flex flex-col md:flex-row bg-white rounded-2xl shadow-lg w-11/12 max-w-4xl min-h-[80%] md:min-h-[70%] lg:min-h-[60%]">
                <div className="pokemon-image relative md:w-1/2 flex justify-center items-center p-4"
                    style={{backgroundColor: `${bgColor}50`}}>
                    <img
                        src={selectedPokemon.sprites.other.dream_world.front_default}
                        alt={selectedPokemon.name}
                        className="h-80"
                    />
                </div>
                <div className="pokemon-details flex-1 p-6">
                    <div className="poki-type flex flex-wrap justify-center gap-2 mb-4">
                        {selectedPokemon.types.map((obj, idx) => {
                            const type = selectedPokemon.types[idx].type.name;
                            const bgColor = typeColors[type] || '#A8A878';

                            return (
                                <p 
                                key={idx} 
                                className="rounded-full px-4 text-lg"
                                style={{
                                    backgroundColor: `${bgColor}40`,
                                    color: `${bgColor}`
                                    }}>
                                {obj.type.name}
                            </p>
                            )
                        })}
                    </div>
                    <h2 className="text-center text-3xl font-bold mb-4">{selectedPokemon.name}</h2>
                    <h3 className="text-center text-xl font-semibold mb-2">About</h3>
                    <div 
                        className="size flex justify-around p-4 rounded-lg text-center mb-4"
                        style={{backgroundColor: `${bgColor}40`}}>
                        <div className="weight">
                            <h4 className="text-gray-600">Weight</h4>
                            <p className="text-lg font-medium">{selectedPokemon.weight / 10} kg</p>
                        </div>
                        <div className="height">
                            <h4 className="text-gray-600">Height</h4>
                            <p className="text-lg">{selectedPokemon.height / 10} m</p>
                        </div>
                        <div className="move">
                            <h4 className="text-gray-600">Move</h4>
                            <ul className="list-none">
                                {selectedPokemon.abilities.map((ability, idx) => (
                                    <li key={idx} className="text-lg font-medium">{ability.ability.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="pokemon-stats">
                        <h3 className="text-xl font-semibold text-center mb-4">Base Stats</h3>
                        <ul className="list-none pl-0">
                            {selectedPokemon.stats.map((stat, idx) => (
                                <li key={idx} className="text-lg py-2 flex items-center justify-between border-b last:border-0">
                                    <span className="w-1/3"
                                        style={{color: `${bgColor}`}}>{stat.stat.name}</span>
                                    <span className="w-1/5">{stat.base_stat}</span>
                                    <div className="w-1/2">
                                        <div className="line bg-orange-200 h-2 rounded"
                                            style={{backgroundColor: `${bgColor}40`}}>
                                            <div className="bg-orange-800 h-2 rounded" 
                                            style={{
                                                width: `${stat.base_stat / 2}%`,
                                                backgroundColor: `${bgColor}`}}></div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <button onClick={handleNext} className="hidden md:flex absolute right-4 md:right-12 top-1/2 transform -translate-y-1/2">
                <FontAwesomeIcon 
                    icon={faGreaterThan} 
                    className='text-3xl text-white hover:text-zinc-200'
                />
            </button>
        </div>
    );
}

export default Pokemon;
