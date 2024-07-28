import { Link } from "react-router-dom"
import Button from "./Button"
import ProductCard from "./ProductCard"
import { dummyProducts } from "../../constant"

type Props = {}

const FeaturedProducts = (props: Props) => {
  return (
    <div className="px-4 pt-32"> 
      <h2 className="text-3xl md:text-5xl text-light-gold mb-4 text-center pb-10 font-serif font-bold">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {dummyProducts.map(product => (
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
  )
}

export default FeaturedProducts
