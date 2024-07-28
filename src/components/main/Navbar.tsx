import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
// import { useSelector } from 'react-redux';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Contact Us', path: '/contact-us' },
  { name: 'Product Management', path: '/dashboard' },
];

const Navbar = () => {
  // Assuming you have a cart state in your Redux store
  // const cartItemCount = useSelector((state) => state.cart.items.length);
  const cartItemCount = 0; // Replace with actual cart count from the Redux store

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-medium-black p-4 flex justify-between items-center ">
      <div className="flex items-center lg:max-w-7xl lg:mx-auto justify-between">
        <Link to="/" className="text-light-gold text-2xl font-bold">
          KeyFusion
        </Link>
        <div className="hidden md:flex ml-10 space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-white hover:text-medium-gold"
              onClick={closeMenu} // Close the menu when a link is clicked
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center">
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-light-gold hover:text-medium-gold">
            <GiHamburgerMenu className="h-6 w-6" />
          </button>
        </div>
        <div className="relative ml-4">
          <Link to="/cart" className="text-light-gold hover:text-medium-gold">
            <FaCartArrowDown className="h-6 w-6" />
          </Link>
          <span className="absolute -top-3 right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white  rounded-full">
            {cartItemCount}
          </span>
        </div>
      </div>
      {isOpen && (
        <div ref={dropdownRef} className="md:hidden absolute top-16 left-0 w-full bg-medium-black p-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block text-white hover:text-medium-gold"
              onClick={closeMenu} // Close the menu when a link is clicked
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
