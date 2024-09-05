import  { useState } from 'react';
import SearchBar from '../../components/productPage/SearchBar';
import FilterComponent from '../../components/productPage/FilterComponent';
import ProductCard from '../../components/main/ProductCard';
import { Link } from 'react-router-dom';
import Button from '../../components/main/Button';
import { useGetProductsQuery } from '../../redux/api/productsApi';



const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('lowToHigh');
  const [priceRange, setPriceRange] = useState<[number, number]>([50, 350]);

  // Adjust the destructuring here
  const { data: { data: products = [] } = {},  isLoading, } = useGetProductsQuery({
    search: searchTerm,
    sort: sortOrder,
    minPrice: priceRange[0],
    maxPrice: priceRange[1],
  });

  const handleSearch = (search: string) => {
    setSearchTerm(search);
  };

  const handleSort = (sort: string) => {
    setSortOrder(sort);
  };

  const handlePriceRangeChange = (minPrice: number, maxPrice: number) => {
    setPriceRange([minPrice, maxPrice]);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <FilterComponent onSortChange={handleSort} onPriceRangeChange={handlePriceRangeChange} />
      <div className="px-4 py-32">
        <h2 className="text-3xl md:text-5xl text-light-gold mb-4 text-center pb-10 font-serif font-bold">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
          {products?.map(product => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
        <div className="text-center mt-6">
          <Link to="/products" className="w-full flex justify-center">
            <Button type="button" variant="primary" size="large">
              See More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
