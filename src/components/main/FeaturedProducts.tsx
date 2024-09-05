import { Link } from "react-router-dom";
import Button from "./Button";
import ProductCard from "./ProductCard";
import { useGetProductsQuery } from "../../redux/api/productsApi";
import { Product } from "../../types/type";



const FeaturedProducts = () => {
  const apiResponse = useGetProductsQuery({
    search: '',
    sort: '',
  });  // You can directly access `data` here

  // Safely extract the products array from apiResponse.data
  const products: Product[] = apiResponse?.data?.data || [];

  console.log('products', products);
  // Sort products by creation date in descending order and take the first 6
  const sortedProducts = products
    ?.slice() // Create a shallow copy to avoid mutating the original array
    .sort((a: Product, b: Product) => {
      const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return dateB - dateA;
    })
    .slice(0, 6);


  return (
    <div className="px-4 pt-32">
      <h2 className="text-3xl md:text-5xl text-light-gold mb-4 text-center pb-10 font-serif font-bold">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {sortedProducts.map(product => (
          <ProductCard product={product} key={product._id}/>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link to="/products" className="w-full flex justify-center">
          <Button
            type="button"
            variant="primary"
            size="large"
          >
            See More
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedProducts;
