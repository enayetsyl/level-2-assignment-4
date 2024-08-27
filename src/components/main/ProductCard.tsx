import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { Product } from '../../types/type';



interface ProductProps {
    product: Product;
  }

const ProductCard: React.FC<ProductProps> = ({product}) => {
  return (
    <div key={product._id} className="relative bg-dark-black border border-dark-gold p-4 rounded-lg group overflow-hidden">
    <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
    <h3 className="text-light-gold text-xl mb-2 text-center">{product.name}</h3>
    <p className="text-medium-gold mb-2 text-center">{product.brand}</p>
    <p className="text-white mb-2 text-center">Available: {product.quantity}</p>
    <p className="text-silver mb-2 text-center">${product.price}</p>
    <p className="text-light-gold mb-4 text-center">Rating: {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}</p>
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <Link to={`/products/${product._id}`} className="w-full flex justify-center cursor-pointer z-10">
    <Button
  children='See Details'
    type="button"
    variant="primary"
    size="medium"
  />
    
      </Link>
    </div>
    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-lg"></div>
  </div>
  )
}

export default ProductCard