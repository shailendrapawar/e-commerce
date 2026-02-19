import axios from "axios";
import API from "@/shared/api/axios";
import ProductService from "../product/product.api";
import useCartStore from "./store/useCartStore";

// const data = useCartStore((s: any) => s);

const { getBulkProducts } = ProductService;

const mapProductsToCart = (cart: { products: [{}] }, items: any) => {
  //make map of cart items
  const cartMap = new Map(
    cart?.products.map((item: any) => [item.productId, item.quantity]),
  );

  //loop and map quantity of each product
  const result = items?.map((v: any) => {
    return {
      ...v,
      qty: cartMap.get(v?.id),
    };
  });

  return result;
};

const CartService = {
  //get single cart(userId)
  getSingleCart: async (userId: number) => {
    const result = await API.get(`/carts/${userId}`);
    let cart = result.data;

    //get bulk products from cart
    let bulkResult = await getBulkProducts(result.data.products);

    //map products to
    // console.log("all cart items", cart);
    const products = mapProductsToCart(cart, bulkResult);
    return {
      ...cart,
      count: products.length || 0,
      products,
    };
  },


  updateCart: async (cart: any) => {
    let result = await API.put(`/carts/${cart?.id}`);
    result = result.data
    console.log("updated cart", result)
    if (result?.id) {
      return result
    }

    return null
  },

  deleteCart: async (cart: any) => {
    try {
      let result = await API.delete(`/carts/${cart?.id}`);
      result = result.data

      if (result.data.id) {
        return true
      }
    } catch (error) {
      return false
    }

  }
};
export default CartService;
