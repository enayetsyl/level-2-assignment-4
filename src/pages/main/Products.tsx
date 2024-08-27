import SearchBar from '../../components/productPage/SearchBar';
import FilterComponent from '../../components/productPage/FilterComponent';
import { dummyProducts } from '../../constant';
import ProductCard from '../../components/main/ProductCard';
import { Link } from 'react-router-dom';
import Button from '../../components/main/Button';
import { useGetProductsQuery } from '../../redux/api/productsApi';

type Props = {};

const Products = (props: Props) => {
  const {data: {data:products} = {},  error, isLoading, refetch } = useGetProductsQuery();
  return (
    <div>
      <SearchBar />
      <FilterComponent />
      <div className="px-4 py-32"> 
      <h2 className="text-3xl md:text-5xl text-light-gold mb-4 text-center pb-10 font-serif font-bold">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {products.map(product => (
         <ProductCard product={product} key={product.id}/>
        ))}
      </div>
      <div className="text-center mt-6">
      <Link to="/products" className="w-full flex justify-center">
      <Button
          children='See More'
            type="button"
            variant="primary"
            size="large"
          />
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Products;
