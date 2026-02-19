import React from "react";
import useGetCart from "../hooks/useGetCart";


import CartList from "../components/cart-list/CartList";
import OrderSummary from "../components/orderSummary/OrderSummary";

const CartPage = () => {
  const { isLoading, cart, isError } = useGetCart(1);

  return (
    <main className="h-auto py-5 px-2  w-full flex flex-col gap-5">
      <h1 className="text-xl sm:text-2xl text-center sm:text-left font-bold">
        Shopping Cart ({cart?.products?.length || 0} items)
      </h1>

      <section className="grid gap-5 md:grid-cols-3">
        <CartList products={cart?.products || []} isLoading={isLoading} />

        {cart?.products && cart?.products.length > 0 && <OrderSummary />}
      </section>
    </main>
  );
};

export default CartPage;
