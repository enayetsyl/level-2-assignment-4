import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

type SearchBarProps = {
  onSearch: (search: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };
  return (
    <div className="flex justify-center items-center py-10 bg-dark-gold">
      <div className="relative w-80">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-12 pl-4 pr-16 rounded-full text-light-black bg-white border border-gray-300 focus:outline-none"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="absolute -right-3 -top-4 mt-2 mr-2 bg-light-gold p-6 rounded-full" onClick={handleSearchClick}>
          <FaSearch className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
