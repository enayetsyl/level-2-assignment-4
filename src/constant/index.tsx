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
      image: 'https://res.cloudinary.com/deqyxkw0y/image/upload/v1720877793/mk-img3_hzevvf.jpg', 
      description: 'The Vortexgear Pok3r is a compact 60% mechanical keyboard, known for its high-quality build and customizable features. It offers a sleek design with a solid aluminum case and supports various layouts and key remapping. Perfect for those who prefer a minimalist setup without compromising on functionality.'
  },
  {
      id: 2,
      name: 'Ducky One 2 Mini',
      brand: 'Ducky',
      quantity: 15,
      price: 99.99,
      rating: 4,
      image: 'https://res.cloudinary.com/deqyxkw0y/image/upload/v1720877793/mk-img2_cyqqiv.jpg', 
      description: 'The Ducky One 2 Mini is a popular 60% mechanical keyboard, favored by gamers and typists alike for its compact size and superior performance. It features customizable RGB lighting, high-quality key switches, and a sturdy design. Ideal for those who need a portable yet powerful keyboard.'
  },
  {
      id: 3,
      name: 'Anne Pro 2',
      brand: 'Anne Pro',
      quantity: 5,
      price: 89.99,
      rating: 4,
      image: 'https://res.cloudinary.com/deqyxkw0y/image/upload/v1720877792/mk-img1_kby7gk.jpg', 
      description: 'The Anne Pro 2 is a versatile 60% mechanical keyboard that offers both wired and wireless connectivity. It is well-regarded for its customizable RGB lighting and responsive key switches. The keyboard is compact yet offers robust functionality, making it suitable for both work and play.'
  },
  {
      id: 4,
      name: 'Corsair K95 RGB',
      brand: 'Corsair',
      quantity: 8,
      price: 199.99,
      rating: 5,
      image: 'https://res.cloudinary.com/deqyxkw0y/image/upload/v1720877792/mk-img1_kby7gk.jpg', 
      description: 'The Corsair K95 RGB is a premium mechanical keyboard designed for gaming enthusiasts. It features dedicated macro keys, customizable RGB lighting, and a durable aluminum frame. With its advanced performance and comfort, the K95 RGB is the choice for serious gamers who demand the best.'
  },
  {
      id: 5,
      name: 'Razer BlackWidow V3',
      brand: 'Razer',
      quantity: 12,
      price: 129.99,
      rating: 4,
      image: 'https://res.cloudinary.com/deqyxkw0y/image/upload/v1720877793/mk-img3_hzevvf.jpg', 
      description: 'The Razer BlackWidow V3 is a high-performance mechanical keyboard known for its tactile and clicky Razer Green switches. It offers a full-sized layout with customizable RGB lighting and a comfortable wrist rest, making it perfect for extended gaming sessions.'
  },
  {
      id: 6,
      name: 'Logitech G Pro X',
      brand: 'Logitech',
      quantity: 20,
      price: 149.99,
      rating: 5,
      image: 'https://res.cloudinary.com/deqyxkw0y/image/upload/v1720877793/mk-img2_cyqqiv.jpg', 
      description: 'The Logitech G Pro X is a top-tier mechanical gaming keyboard designed for eSports professionals. It features swappable key switches, customizable RGB lighting, and a compact tenkeyless design. Built for precision and speed, the G Pro X ensures you have the edge in every game.'
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