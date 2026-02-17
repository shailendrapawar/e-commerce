import API from "@/shared/api/axios";

const ProductService = {
  getAllCategories: async () => {
    const result = await API.get("/products");
    // console.log(result.data);
    return result.data || [];
  },
  getAllProducts: async (limit: number = 0) => {
    const result = await API.get(`/products?limit=${limit}`);
    // console.log(result.data);
    return result.data;
  },
  getSingleProduct: async (id: number) => {
    const result = await API.get(`/products/${id}`);
    // console.log(result.data);
    return result.data;
  },
  getBulkProducts: async (items: []) => {
    let result = [];

    result = items.map(async (item: any) => {
      const id = item?.id || item?.productId;
      if (!id) {
        return null;
      }
      return await ProductService.getSingleProduct(id);
    });

    result = await Promise.allSettled(result);
    return result.filter((item) => item !== null).map((i: any) => i?.value);
  },
};
export default ProductService;
