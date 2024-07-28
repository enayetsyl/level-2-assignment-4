import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-10 bg-dark-gold">
      <div className="relative w-80">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-12 pl-4 pr-16 rounded-full text-light-black bg-white border border-gray-300 focus:outline-none"
        />
        <button className="absolute -right-3 -top-4 mt-2 mr-2 bg-light-gold p-6 rounded-full">
          <FaSearch className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
