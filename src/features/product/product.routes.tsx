import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";

export const productRoutes = [
  {
    path: "/home/",
    index: true,
    element: <Home />,
  },
  {
    path: "/home/products",
    element: <Products />,
  },
  {
    path: "/home/products/:id",
    elment: <SingleProduct />,
  },
];
