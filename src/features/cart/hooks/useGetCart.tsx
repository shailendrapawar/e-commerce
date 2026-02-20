import React, { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import CartService from "../cart.api.ts";

const { getSingleCart, updateCart, deleteCart } = CartService;

const useGetCart = (id: number) => {
  const queryClient = useQueryClient();
  //get user cart
  const { isLoading, data, isError } = useQuery({
    queryKey: ["user-cart"],
    queryFn: () => getSingleCart(id),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });

  //add item to cart
  const addToCart = useMutation({
    mutationFn: (cart: any) => updateCart(cart),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-cart"] });
    },
  });

  //remove item from cart
  const removeFromCart = useMutation({
    mutationFn: (productId: any) => {
      //filter products.....
      const products = data?.products?.filter(
        (product: any) => product?.id != productId,
      );

      const cart = {
        ...data,
        count: data?.count - 1,
        products,
      };

      console.log("cart", cart);
      updateCart({ ...cart });
      console.log("returnign p id", productId);
      return productId;
    },

    onSuccess: (productId: any) => {
      // get previous cart data
      queryClient.setQueryData(["user-cart"], (prevCart: any) => {
        //extract and filter the products
        const oldProducts = prevCart?.products;
        const filteredProducts = oldProducts?.filter(
          (item: any) => item.id != productId,
        );

        //return updated cart
        return {
          ...prevCart,
          products: filteredProducts,
        };
      });
    },

    onError: (error) => {
      queryClient.setQueryData(["user-cart"], (prevCart: any) => {
        //extract and filter the products
        const oldProducts = prevCart?.products;
        console.log("old products", oldProducts);
        //return updated cart
        return {
          ...prevCart,
          products: oldProducts,
        };
      });
    },
  });

  const deleteUserCart = useMutation({
    mutationFn: (cart: any) => deleteCart(cart),
  });

  return {
    isLoading,
    cart: data,
    isError,
    addToCart: addToCart.mutate,
    removeFromCart: removeFromCart.mutate,
    deleteUserCart: deleteUserCart.mutate,
  };
};

export default useGetCart;
