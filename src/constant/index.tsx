import { Brand } from "../components/main/Brands";
import { FaStarOfLife, FaRegBuilding, FaRegUser } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiReceiveMoney } from "react-icons/gi";
import { IoCallSharp } from "react-icons/io5";
export const dummyProducts = [
    {
      id: 1,
      name: 'Vortexgear Pok3r',
      brand: 'Vortexgear',
      quantity: 10,
      price: 120.00,
      rating: 5,
      image: 'https://res.cloudinary.com/deqyxkw0y/image/upload/v1720877793/mk-img3_hzevvf.jpg', // Replace with actual image URLs
    },
    {
      id: 2,
      name: 'Ducky One 2 Mini',
      brand: 'Ducky',
      quantity: 15,
      price: 99.99,
      rating: 4,
      image: 'https://res.cloudinary.com/deqyxkw0y/image/upload/v1720877793/mk-img2_cyqqiv.jpg', // Replace with actual image URLs
    },
    {
      id: 3,
      name: 'Anne Pro 2',
      brand: 'Anne Pro',
      quantity: 5,
      price: 89.99,
      rating: 4,
      image: 'https://res.cloudinary.com/deqyxkw0y/image/upload/v1720877792/mk-img1_kby7gk.jpg', // Replace with actual image URLs
    },
    {
      id: 4,
      name: 'Corsair K95 RGB',
      brand: 'Corsair',
      quantity: 8,
      price: 199.99,
      rating: 5,
      image: 'https://res.cloudinary.com/deqyxkw0y/image/upload/v1720877792/mk-img1_kby7gk.jpg', // Replace with actual image URLs
    },
    {
      id: 5,
      name: 'Razer BlackWidow V3',
      brand: 'Razer',
      quantity: 12,
      price: 129.99,
      rating: 4,
      image: 'https://res.cloudinary.com/deqyxkw0y/image/upload/v1720877793/mk-img3_hzevvf.jpg', // Replace with actual image URLs
    },
    {
      id: 6,
      name: 'Logitech G Pro X',
      brand: 'Logitech',
      quantity: 20,
      price: 149.99,
      rating: 5,
      image: 'https://res.cloudinary.com/deqyxkw0y/image/upload/v1720877793/mk-img2_cyqqiv.jpg', // Replace with actual image URLs
    }
  ];
  
  export const brands: Brand[] = [
    { name: 'Corsair', logo: '/corsair.png' },
    { name: 'Logitech', logo: '/logitech.png' },
    { name: 'Razer', logo: '/razer.png' },
    { name: 'Ducky', logo: '/ducky.png' },
    { name: 'SteelSeries', logo: '/steelseries.png' },
  ];

  export const WhyUsContent = [
    {
      icon: <FaStarOfLife className="fa-2x" />,
      title: "Fast Processing",
      description: "We ensure quick processing of your orders."
    },
    {
      icon: <FaRegBuilding className="fa-2x" />,
      title: "Trusted Company",
      description: "We have a proven track record of trust and reliability."
    },
    {
      icon: <FaRegUser className="fa-2x" />,
      title: "Fast Interview",
      description: "Quick and easy communication process."
    },
    {
      icon: <CiDeliveryTruck className="fa-2x" />,
      title: "In-Time Delivery",
      description: "Guaranteed on-time delivery of your orders."
    },
    {
      icon: <GiReceiveMoney className="fa-2x" />,
      title: "Reasonable Price",
      description: "Competitive pricing for high-quality products."
    },
    {
      icon: <IoCallSharp className="fa-2x" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your needs."
    },
  ];

  export const reviews = [
    {
      image: '/user1.jfif',
      name: 'Adam Jonson',
      role: 'Developer',
      review: 'Sample text. Click to select the text box. click again or double click to start editing the text.'
    },
    {
      image: '/user2.jfif',
      name: 'Jane Doe',
      role: 'Designer',
      review: 'Sample text. Click to select the text box. click again or double click to start editing the text.'
    },
    {
      image: '/user3.jfif',
      name: 'John Smith',
      role: 'Manager',
      review: 'Sample text. Click to select the text box. click again or double click to start editing the text.'
    }
  ];