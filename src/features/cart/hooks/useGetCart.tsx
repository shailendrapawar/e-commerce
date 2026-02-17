import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import CartService from "../cart.api.ts";

const { getSingleCart } = CartService;

const useGetCart = (id: number) => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["user-cart"],
    queryFn: () => getSingleCart(id),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });

  return { isLoading, cart: data, isError };
};

export default useGetCart;
