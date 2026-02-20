import React from "react";
import useGetCart from "@/features/cart/hooks/useGetCart";

import CartList from "@/features/cart/components/cart-list/CartList";
import OrderSummary from "@/features/cart/components/orderSummary/OrderSummary";

const CartPage = () => {
  const { isLoading, cart, isError } = useGetCart(1);

  return (
    <main className="h-auto py-5 px-2  w-full flex flex-col gap-5">
      <h1 className="text-xl sm:text-2xl text-center sm:text-left font-bold">
        Shopping Cart ({cart?.products?.length || 0} items)
      </h1>

      <section className="grid gap-5 md:grid-cols-3">
        <CartList products={cart?.products || []} isLoading={isLoading} />

        {cart?.products && cart?.products.length > 0 && (
          <OrderSummary cart={cart} />
        )}
      </section>
    </main>
  );
};

export default CartPage;
