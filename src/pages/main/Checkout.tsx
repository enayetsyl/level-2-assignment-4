import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/main/Button";

type Props = {};

const Checkout = (props: Props) => {
  const location = useLocation();
  const { totalValue } = location.state || { totalValue: 0 };
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate()
  // Check if all fields are filled
  const isFormValid = fullName && email && address && city && mobile;

  console.log("total value", totalValue);
  // Handling order place

  const handleOrderPlace = () => {
    navigate("/success")
  }
  
  return (
    <div className="min-h-[70vh] bg-white p-5 md:p-10 lg:px-20 lg:py-10">
      <h1 className="font-bold text-3xl pt-10 pb-5">Checkout Form</h1>
      <div className="bg-dark-gray px-5 py-10 shadow-xl text-white  flex justify-between gap-5 items-end">
       <div className="w-2/3 space-y-3 ">
       <h2 className="text-xl font-bold pb-3">Delivery Address</h2>
        <div className="flex flex-col items-start">
          <label htmlFor="name" className="mb-1 font-bold">Full Name</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Full Name..." 
            className="p-2 mt-2  text-black w-full"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="email" className="mb-1 font-bold">Email</label>
          <input 
            type="text" 
            name="email" 
            placeholder="Email..." 
            className="p-2 mt-2  text-black w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="address" className="mb-1 font-bold">Address</label>
          <input 
            type="text" 
            name="address" 
            placeholder="Address..." 
            className="p-2 mt-2  text-black w-full"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="city" className="mb-1 font-bold">City</label>
          <input 
            type="text" 
            name="city" 
            placeholder="City..." 
            className="p-2 mt-2  text-black w-full"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="mobile" className="mb-1 font-bold">Mobile Number</label>
          <input 
            type="text" 
            name="mobile" 
            placeholder="Mobile Number..." 
            className="p-2 mt-2  text-black w-full"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
       </div>
        <div className="w-1/3">
          <h3 className="font-bold text-lg pb-3">Cash on Delivery</h3>
          <Button 
            variant="primary" 
            size="large" 
            className="w-full" 
            disabled={!isFormValid}
            onClick={handleOrderPlace}
          >
            Place Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
