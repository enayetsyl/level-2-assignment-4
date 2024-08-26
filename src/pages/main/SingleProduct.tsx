import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyProducts } from "../../constant";
import { Product } from "../../types/type";
import Button from "../../components/main/Button";

type Props = {};

const SingleProduct: React.FC<Props> = () => {
  const { productId } = useParams<{ productId: string }>();
  const productIdNumber: number = parseInt(productId as string);

  const [product, setProduct] = useState<Product  | undefined>();

  useEffect(() => {
    const product = dummyProducts.find(
      (product) => product.id == productIdNumber
    );
    setProduct(product);
  }, [productIdNumber]);

  console.log(product);

  const handleAddToCart = () => {
    if (!product) return;

    // Check if the product is out of stock
    if (product.quantity <= 0) {
      alert("Product is out of stock and cannot be added to the cart.");
      return;
    }

    // Get the current cart from local storage or initialize an empty array
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Find the product in the cart
    const existingProduct = cart.find((item: Product) => item.id === product.id);

    if (existingProduct) {
      // Check if adding one more exceeds the available stock
      if (existingProduct.quantity >= product.quantity) {
        alert("You cannot add more than the available stock.");
        return;
      }

      // Increase the quantity if product already exists in the cart
      existingProduct.quantity += 1;
    } else {
      // Add the product to the cart with a quantity of 1
      cart.push({ ...product, quantity: 1 });
    }

    // Save the updated cart back to local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to the cart!");
  };

  return (
    <div className="bg-white flex justify-center items-center gap-5 py-20 px-5">
      <img src={product?.image} alt={product?.name} className="p-5 w-1/2" />
      <div className="w-1/2 p-5">
        <h1 className="font-bold text-3xl pb-2">{product?.name}</h1>
        <div className="flex justify-start items-center gap-5 text-base font-bold">
          <p>${product?.price}</p>
          <p>{product?.brand}</p>
        </div>
        <p className="text-medium-gold mb-4 ">Rating: {'★'.repeat(product?.rating as number)}{'☆'.repeat(5 - (product?.rating as number))}</p>
        <p className="py-2">{product?.description}</p>

        <div className="flex justify-between items-center pt-5">
          <h3 className="font-bold text-base">Available Quantity</h3>
          <h3 className="font-bold text-base">{product?.quantity}</h3>
        </div>
        <div className="w-full  pt-5">
          <Button
          type="submit"
          variant="primary"
          className="w-full uppercase"
          onClick={handleAddToCart}
          >Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;