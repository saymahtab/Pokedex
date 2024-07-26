import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ pokemonName, handleChange }) => {
    return (
        <header className='navbar fixed flex-wrap w-full h-28 flex justify-between max-md:h-20'>
            <div>
                <div className="pokemon ml-20 mt-3 max-md:ml-28">
                    <img src="Pokedex_logo.png" alt="img" className='h-24 max-md:h-12 max-md:mx-auto' />
                </div>
            </div>
            <div className="relative search-container w-2/6 h-12 mr-20 mt-10 max-md:mt-2 max-md:ml-4 max-md:w-full max-md:mx-5">
                <input
                    type="search"
                    placeholder="Search Pokémon"
                    className="search-input h-full w-full rounded-full px-12 pl-10 pr-4 outline-none max-md:h-8"
                    value={pokemonName}
                    onChange={handleChange}
                />
                <FontAwesomeIcon
                    icon={faSearch}
                    className="search-icon absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 max-md:top-4"
                />
            </div>
        </header>
    );
}

export default NavBar;
