import React, { useState } from 'react';
import Button from '../../components/main/Button';
import { useAddProductMutation, useDeleteProductMutation, useGetProductQuery, useGetProductsQuery, useUpdateProductMutation } from '../../redux/api/productsApi';

type Props = {}

const ProductsDashboard = (props: Props) => {
  const {data: {data:products} = {},  error, isLoading, refetch } = useGetProductsQuery();

  console.log('products', products)
  const [addProduct] = useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation()

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 0,
    description: '',
    quantity: 0,
    rating: '',
    image: '',
    brand: '',
  });
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  
  // if (error) {
  //   return <div>Error loading products.</div>;
  // }

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

  const handleUpdateProduct = async (e) => {
    e.preventDefault()
    console.log('selected product', selectedProduct)
    await updateProduct(selectedProduct)
    setIsEditModalOpen(false);
    refetch()
  };

  const handleDeleteProduct = async () => {
    await deleteProduct(selectedProduct._id)
    setIsDeleteModalOpen(false);
    refetch()
  };

  const handleAddProduct = async (event) => {
    event.preventDefault(); // Prevent page reload
    try {
      // Ensure price and quantity are numbers
      const productToSend = {
        ...newProduct,
        price: Number(newProduct.price),
        quantity: Number(newProduct.quantity),
      };
  
      await addProduct(productToSend).unwrap();
      setIsAddModalOpen(false);
      refetch();
  
      // Reset the form fields
      setNewProduct({
        name: '',
        price: 0,
        description: '',
        quantity: 0,
        rating: '',
        image: '',
        brand: '',
      });
    } catch (error) {
      console.error("Failed to add product: ", error);
    }
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
          {products?.map((product) => (
            <tr key={product._id} className="border-t">
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
                  onClick={() => openDeleteModal(product)}
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
            name='name'
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
            name='price'
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={selectedProduct.description}
            name='description'
            onChange={(e) => setSelectedProduct({ ...selectedProduct, description: e.target.value })}
            placeholder="Enter product description"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Available Quantity</label>
          <input
            type="number"
            name='quantity'
            value={selectedProduct.quantity}
            onChange={(e) => setSelectedProduct({ ...selectedProduct, quantity: e.target.value })}
            placeholder="Enter available quantity"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Rating</label>
          <input
            type="text"
            name='rating'
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
            name='image'
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
            name='brand'
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
            name='name'
            value={newProduct.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            placeholder="Enter product price"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            name='price'
            value={newProduct.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            placeholder="Enter product description"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            name='description'
            value={newProduct.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Available Quantity</label>
          <input
            type="number"
            placeholder="Enter available quantity"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            name='quantity'
            value={newProduct.quantity}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Rating</label>
          <input
            type="text"
            placeholder="Enter product rating"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            name='rating'
            value={newProduct.rating}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            placeholder="Enter image URL"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            name='image'
            value={newProduct.image}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Brand</label>
          <input
            type="text"
            placeholder="Enter brand name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            name='brand'
            value={newProduct.brand}
            onChange={handleInputChange}
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
