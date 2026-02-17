import React from "react";
import { create } from "zustand";

const useCartStore = create((set, get) => ({
  userCart: null,

  setCart: (cart: any) => {
    console.log("inside set", cart);
    set({ userCart: { ...cart } });
    // set({ cart: cart });
  },
}));

export default useCartStore;
