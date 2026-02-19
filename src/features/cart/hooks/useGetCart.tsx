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
      queryClient.invalidateQueries({ queryKey: ["user-cart"] })
    },
  })

  //remove item from cart
  const removeFromCart = useMutation({
    mutationFn: (cart: any) => updateCart(cart),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-cart"] })
    },
  })

  const deleteUserCart = useMutation({
    mutationFn: (cart: any) => deleteCart(cart),

  })

  return {
    isLoading,
    cart: data, isError,
    addToCart,
    removeFromCart,
    deleteUserCart
  };
};

export default useGetCart;
