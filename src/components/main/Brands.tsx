import React from 'react';
import { brands } from '../../constant';

export type Brand = {
  name: string;
  logo: string;
};



const Brands: React.FC = () => {
  return (
    <div className="px-4 py-32">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {brands.map(brand => (
          <div key={brand.name} className="relative flex justify-center items-center p-4 group">
            <img src={brand.logo} alt={brand.name} className="h-20" />
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-dark-gray text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
