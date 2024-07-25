import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ pokemonName, handleChange }) => {
    return (
        <header className='navbar bg-[#F08030] p-4'>
            <div className='flex justify-start items-center'>
                <div className="icon">
                    <img src="poke.png" alt="Pokémon Icon" className='icon-image h-12 m-2 mx-6' />
                </div>
                <div className="heading">
                    <h1 className='text-5xl font-bold text-white'>Pokedex</h1>
                </div>
            </div>
            <div className="relative search-container mx-6 w-full max-w-md h-12 mt-4">
                <input
                    type="search"
                    placeholder="Search Pokémon"
                    className="search-input w-full h-full rounded-full px-12 pl-10 pr-4 outline-none"
                    value={pokemonName}
                    onChange={handleChange}
                />
                <FontAwesomeIcon
                    icon={faSearch}
                    className="search-icon absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
                />
            </div>
        </header>
    );
}

export default NavBar;
