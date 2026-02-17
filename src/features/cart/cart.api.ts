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
    // console.log(cart);

    //get bulk products from cart
    let bulkResult = await getBulkProducts(result.data.products);

    //map products to
    // console.log("all cart items", cart);
    return {
      ...cart,
      products: mapProductsToCart(cart, bulkResult),
    };
  },
};
export default CartService;
