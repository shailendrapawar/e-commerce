import React from "react";
import useGetCart from "../hooks/useGetCart";
import useCartStore from "../store/useCartStore";
import CartList from "../components/cart-list/CartList";

const CartPage = () => {
  const { isLoading, cart, isError } = useGetCart(1);
  console.log(cart);

  return (
    <main className="h-auto py-5 px-2 w-full flex flex-col gap-5">
      <h1 className="text-xl font-bold">Shopping Cart (1 items)</h1>
      {/* <section className="py-5  h-auto gap-2 w-full"> */}
      <CartList products={cart?.products || []} isLoading={isLoading} />
      {/* </section> */}
    </main>
  );
};

export default CartPage;
