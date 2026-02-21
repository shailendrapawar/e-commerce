import { create } from "zustand";
export const useWishlistStore = create<any>((set, get) => ({
  wishlistProducts: [],

  setWishlist: () => {
    set({
      wishlistProducts: [],
    });
  },

  addToWishlist: (product: any) => {
    console.log("add to wishlist");
    const exisitingProducts = get().wishlistProducts;

    const index = exisitingProducts.findIndex(
      (v: any, _: any) => v?.id == product?.id,
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
    const { wishlistProducts } = get();
    const filteredItems = wishlistProducts?.filter(
      (item: any) => item?.id != productId,
    );
    set({
      wishlistProducts: filteredItems,
    });
  },

  isWishlistProduct: (productId: any) => {
    const { wishlistProducts } = get();
    const index = wishlistProducts?.findIndex(
      (item: any) => item?.id == productId,
    );
    if (index < 0) {
      return false;
    }
    return true;
  },

  toggleWishlistProduct: (product: any) => {
    const exisitingProducts = get().wishlistProducts;
    const index = exisitingProducts.findIndex(
      (v: any, _: any) => v?.id == product?.id,
    );
    if (index >= 0) {
      //it exists , remove from it
      const filteredItems = exisitingProducts?.filter(
        (item: any) => item?.id != product?.id,
      );
      set({
        wishlistProducts: filteredItems,
      });
      console.log("new product to wishlist added");
      return;
    }
    //add into it"
    set({
      wishlistProducts: [...exisitingProducts, product],
    });
  },

  addToCart: (product: any) => {
    console.log("Adding to cart", product);
    const { wishlistProducts } = get();
    const filteredItems = wishlistProducts?.filter(
      (item: any) => item?.id != product?.id,
    );
    set({
      wishlistProducts: filteredItems,
    });
  },
}));
