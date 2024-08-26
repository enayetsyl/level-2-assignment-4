import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/main/Home";
import SingleProduct from "../pages/main/SingleProduct";
import Cart from "../pages/main/Cart";
import Checkout from "../pages/main/Checkout";
import AboutUs from "../pages/main/AboutUs";
import ContactUs from "../pages/main/ContactUs";
import DashboardLayout from "../layout/DashboardLayout";
import Products from "../pages/main/Products";
import ProductsDashboard from "../pages/dashboard/ProductsDashboard";
import AddProduct from "../pages/dashboard/AddProduct";
import UpdateProduct from "../pages/dashboard/UpdateProduct";
import Success from "../pages/main/Success";

const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'products', element: <Products /> },
        { path: 'products/:productId', element: <SingleProduct/> },
        { path: 'cart', element: <Cart /> },
        { path: 'checkout', element: <Checkout /> },
        { path: 'success', element: <Success /> },
        { path: 'about-us', element: <AboutUs /> },
        { path: 'contact-us', element: <ContactUs /> },
      ],
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'products', element: <ProductsDashboard /> },
        { path: 'add-product', element: <AddProduct /> },
        { path: 'update-product/:productId', element: <UpdateProduct /> },
      ],
    },
  ]);

  export default router