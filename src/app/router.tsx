import { createBrowserRouter } from "react-router-dom";

// import all layouts here=====================>
import AuthLayout from "@/_layouts/AuthLayout";
import ProductLayout from "@/_layouts/ProductLayout";
import RootLayout from "@/_layouts/RootLayout";
import CartLayout from "@/_layouts/CartLayout";
import WishlistLayout from "@/_layouts/WishlistLayout";

// import all routes here=======================>
import { authRoutes } from "@/features/auth/auth.routes";
import { productRoutes } from "@/features/product/product.routes";
import { cartRoutes } from "@/features/cart/cart.routes";
import { wishlistRoutes } from "@/features/wishlist/wishlist.routes";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [...authRoutes],
  },
  {
    path: "/home",
    element: <ProductLayout />,
    children: [...productRoutes],
  },
  {
    path: "/cart",
    element: <CartLayout />,
    children: [...cartRoutes],
  },
  {
    path: "/wishlist",
    element: <WishlistLayout />,
    children: [...wishlistRoutes],
  },
]);
