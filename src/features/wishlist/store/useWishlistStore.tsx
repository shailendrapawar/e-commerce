import React from "react";
import { create } from "zustand";
const intialState = [
  {
    id: 101,
    title: "Wireless Noise Cancelling Headphones",
    price: 89.99,
    description:
      "Over-ear Bluetooth headphones with active noise cancellation, 40-hour battery life, built-in mic for calls, and soft memory foam ear cushions.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
  },
  {
    id: 202,
    title: "Men's Slim Fit Casual Shirt",
    price: 34.5,
    description:
      "Breathable cotton blend slim fit shirt, button-down collar, perfect for casual or smart-casual wear. Available in multiple colors.",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800",
  },
  {
    id: 303,
    title: "Stainless Steel Insulated Water Bottle",
    price: 24.95,
    description:
      "750ml double-wall vacuum insulated bottle keeps drinks cold for 24 hours or hot for 12 hours. Leak-proof cap and BPA-free.",
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1602488285747-9ab6e8a4d4e5?w=800",
  },
];

export const useWishlistStore = create<any>((set, get) => ({
  wishlistProducts: [],

  setWishlist: () => {
    set({
      wishlistProducts: intialState,
    });
  },

  addToWishlist: (product: any) => {
    console.log("add to wishlist");
    const exisitingProducts = get().wishlistProducts;

    const index = exisitingProducts.findIndex(
      (v: any, i: number) => v?.id == product?.id,
    );
    //return if already exists,
    //also show a toast or sonner
    if (index >= 0) {
      console.log("already exists");
      return;
    }

    set({
      wishlistProducts: [...exisitingProducts, product],
    });
  },

  removeFromWishlist: (productId: any) => {
    // console.log("callexd");
    const { wishlistProducts } = get();
    // console.log("got items", wishlistProducts);
    const filteredItems = wishlistProducts?.filter(
      (item: any) => item?.id != productId,
    );
    // console.log("got items", filteredItems);

    set({
      wishlistProducts: filteredItems,
    });
  },

  addToCart: (product: any) => {},
}));
