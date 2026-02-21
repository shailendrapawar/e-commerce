import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/Checkout";
export const cartRoutes = [
  {
    index: true,
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/cart/checkout",
    element: <CheckoutPage />,
  },
];
