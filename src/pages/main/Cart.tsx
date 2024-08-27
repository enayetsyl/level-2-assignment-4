import React, { useEffect, useState } from "react";
import { Product } from "../../types/type";
import Button from "../../components/main/Button";
import { useNavigate } from "react-router-dom";

type Props = {};

const Cart = (props: Props) => {
  const [items, setItems] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cartItem = localStorage.getItem("cart");
    if (cartItem) {
      setItems(JSON.parse(cartItem));
    }
  }, []);
  console.log("cart", items);

  // Function to handle increasing quantity
  const increaseQuantity = (id: number) => {
    const updatedItems = items.map((item) => {
      if (item._id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  // Function to handle decreasing quantity
  const decreaseQuantity = (id: number) => {
    const updatedItems = items.map((item) => {
      if (item._id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  // Product remove functionality

  const handleProductRemove = (id: number) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };
  
  

  // Calculate the total value of the cart
  const totalValue = items.reduce((total, item) => {
    return total + Number(item?.quantity) * Number(item?.price);
  }, 0);


  // Handle checkout navigation
  const handleCheckout = () => {
    navigate("/checkout", { state: { totalValue, items } });
  };

  return (
    <div className="bg-dark-gray flex justify-center items-center px-10 lg:px-32 xl:px-40 2xl:px-64 py-20 min-h-[60vh]">
  {
    items?.length > 0 ? (<div className="bg-white py-5 px-8">
      <div className="flex justify-between items-center">
        <h3 className="font-bold">Shopping Cart</h3>
        <p className="text-red-600 underline text-sm">Remove all</p>
      </div>
      <div>
        {items?.map((item) => (
          <div
            key={item?._id}
            className="grid grid-cols-4 gap-5 items-center py-5"
          >
            <img src={item?.image} alt={item.name} />
            <h3 className="font-bold text-lg">{item?.name}</h3>
            <div className="flex justify-center items-center gap-2">
            <button
                className="bg-dark-gray px-1.5 text-white rounded-full"
                onClick={() => increaseQuantity(item._id)}
              >
                +
              </button>
              <p className="font-bold">{item?.quantity}</p>
              <button
                className="bg-dark-gray px-1.5 text-white rounded-full"
                onClick={() => decreaseQuantity(item._id)}
              >
                -
              </button>
            </div>
            <div className="flex flex-col items-end justify-end">
              <p className="justify-end font-bold ">
                ${parseFloat(item?.quantity) * parseFloat(item?.price)}
              </p>
              <button 
              onClick={() => handleProductRemove(item.id)}
              className="text-red-600 underline text-xs">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end ">
        <hr className="h-0.5 font-bold bg-black w-2/3 justify-end" />
      </div>
      <div className="flex justify-end items-center py-2 gap-6">
        <div className="flex flex-col justify-start items-start">
          <h4 className="font-bold text-sm">Sub-Total</h4>
          <p className="text-dark-gray text-xs">{items?.length} Items</p>
        </div>
        <h2 className="font-bold text-lg">${totalValue}</h2>
      </div>
      <div className="flex justify-end">
        <Button className="text-black" type="button" size="large" variant="primary" onClick={handleCheckout}>Checkout</Button>
      </div>
    </div>) : (
      <div className="flex justify-center items-center text-white text-center">
      <h1 className="font-bold text-5xl">You have no items in your cart</h1>
      </div>
    )
  }
    </div>
  );
};

export default Cart;
