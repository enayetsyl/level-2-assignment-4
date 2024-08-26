import React, { useState } from 'react';
import Button from '../../components/main/Button';

type Props = {}

const ProductsDashboard = (props: Props) => {
  const [products, setProducts] = useState([
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
  },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (product) => {
    setSelectedProduct(product);
    setIsDeleteModalOpen(true);
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleUpdateProduct = () => {
    // Update product logic
    setIsEditModalOpen(false);
  };

  const handleDeleteProduct = (id: number) => {
    // Delete product logic
    setIsDeleteModalOpen(false);
  };

  const handleAddProduct = () => {
    // Add product logic
    setIsAddModalOpen(false);
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Products Dashboard</h1>
      
      {/* Add Product Button */}
      <button
        onClick={openAddModal}
        className="mb-5 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
        Add Product
      </button>

      {/* Product List Table */}
      <table className="min-w-full bg-white rounded-lg shadow-lg">
        <thead>
          <tr>
            <th className="px-6 py-4 text-left font-bold">Product Name</th>
            <th className="px-6 py-4 text-left font-bold">Price</th>
            <th className="px-6 py-4 text-left font-bold">Brand</th>
            <th className="px-6 py-4 text-left font-bold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-t">
              <td className="px-6 py-4">{product.name}</td>
              <td className="px-6 py-4">${product.price}</td>
              <td className="px-6 py-4">{product.brand}</td>
              <td className="px-6 py-4 flex gap-1 flex-wrap">
                <Button
                  onClick={() => openEditModal(product)}
                  className=" px-4 py-2 rounded-lg hover:bg-yellow-400 transition"
                  size='small'
                  type='button'
                  variant='primary'
                  >
                  Update
                </Button>
                <Button
                  onClick={() => openDeleteModal(product.id)}
                  className=" text-white px-[19px] py-2 rounded-lg hover:bg-red-600 transition"
                  variant='danger'
                  size='small'
                  type='button'
                  >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    {/* Edit Product Modal */}
{isEditModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto py-10">
    <div className="bg-white p-5 pt-40 rounded-lg shadow-lg w-[80%] lg:w-1/2">  {/* Adjust width if necessary */}
      <h2 className="text-2xl font-bold mb-5">Edit Product</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Product Name</label>
          <input
            type="text"
            value={selectedProduct?.name}
            onChange={(e) => setSelectedProduct({ ...selectedProduct, name: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            value={selectedProduct.price}
            onChange={(e) => setSelectedProduct({ ...selectedProduct, price: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={selectedProduct.description}
            onChange={(e) => setSelectedProduct({ ...selectedProduct, description: e.target.value })}
            placeholder="Enter product description"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Available Quantity</label>
          <input
            type="number"
            value={selectedProduct.quantity}
            onChange={(e) => setSelectedProduct({ ...selectedProduct, quantity: e.target.value })}
            placeholder="Enter available quantity"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Rating</label>
          <input
            type="number"
            value={selectedProduct.rating}
            onChange={(e) => setSelectedProduct({ ...selectedProduct, rating: e.target.value })}
            placeholder="Enter product rating"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            value={selectedProduct.image}
            onChange={(e) => setSelectedProduct({ ...selectedProduct, image: e.target.value })}
            placeholder="Enter image URL"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Brand</label>
          <input
            type="text"
            value={selectedProduct.brand}
            onChange={(e) => setSelectedProduct({ ...selectedProduct, brand: e.target.value })}
            placeholder="Enter brand name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleUpdateProduct}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
            Save
          </button>
          <button
            onClick={() => setIsEditModalOpen(false)}
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
)}


      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-5">Delete Product</h2>
            <p>Are you sure you want to delete this product?</p>
            <div className="flex justify-end mt-5">
              <button
                onClick={handleDeleteProduct}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                Delete
              </button>
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

     {/* Add Product Modal */}
{isAddModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto py-10">
    <div className="bg-white p-5 pt-40 rounded-lg shadow-lg my-10 w-[80%] lg:w-1/2">  {/* Adjusted margin top */}
      <h2 className="text-2xl font-bold mb-5">Add Product</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Product Name</label>
          <input
            type="text"
            placeholder="Enter product name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            placeholder="Enter product price"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            placeholder="Enter product description"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Available Quantity</label>
          <input
            type="number"
            placeholder="Enter available quantity"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Rating</label>
          <input
            type="number"
            placeholder="Enter product rating"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            placeholder="Enter image URL"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Brand</label>
          <input
            type="text"
            placeholder="Enter brand name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleAddProduct}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
            Add Product
          </button>
          <button
            onClick={() => setIsAddModalOpen(false)}
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
)}

    </div>
  );
}

export default ProductsDashboard;
