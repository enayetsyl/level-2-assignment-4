import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';

const FilterComponent: React.FC = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([50, 350]);
  const [sortOrder, setSortOrder] = useState<string>('lowToHigh');

  const handleClearFilters = () => {
    setPriceRange([50, 350]);
    setSortOrder('lowToHigh');
  };

  return (
    <div className="">
      <div className="bg-white shadow-md rounded-lg px-6 py-5">
        <h2 className="text-xl font-semibold mb-5">Filters</h2>

        <div className='flex justify-between items-start'>
            {/* Sort Options */}
        <div className="w-2/5 ">
          <label className="block text-sm font-medium mb-2">Sort by</label>
          <div className="flex space-x-4">
            <button
              className={`flex items-center space-x-2 p-2 rounded ${sortOrder === 'lowToHigh' ? 'bg-medium-gold text-white' : 'bg-gray-200'}`}
              onClick={() => setSortOrder('lowToHigh')}
            >
              <FaSortAmountDown />
              <span>Price (low to high)</span>
            </button>
            <button
              className={`flex items-center space-x-2 p-2 rounded ${sortOrder === 'highToLow' ? 'bg-medium-gold text-white' : 'bg-gray-200'}`}
              onClick={() => setSortOrder('highToLow')}
            >
              <FaSortAmountUp />
              <span>Price (high to low)</span>
            </button>
          </div>
        </div>

      <div className='w-3/5 flex justify-between items-center gap-5'>
          {/* Price Range Slider */}
          <div className="mb-4 flex-1 ">
          <label className="block text-sm font-medium mb-2">Price range</label>
          <ReactSlider
            className="w-full h-5 mt-2"
            thumbClassName="h-6 w-6 p-1 bg-light-gold rounded-full cursor-grab flex items-center justify-center text-xs text-black"
            trackClassName="top-0 bottom-0 bg-dark-black rounded-full"
            min={0}
            max={500}
            value={priceRange}
            onChange={(value) => setPriceRange(value as [number, number])}
            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          />
          <div className="flex justify-between text-sm mt-2 ">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>

        {/* Clear Filters Button */}
        <div className="flex justify-end">
          <button
            className="bg-dark-black text-white px-4 py-1 rounded hover:bg-medium-black transition"
            onClick={handleClearFilters}
          >
            Clear Filters
          </button>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
