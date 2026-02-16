import API from "@/shared/api/axios";

export default {
  getAllCategories: async () => {
    const result = await API.get("/categories");
    // console.log(result.data);
    return result.data;
  },
  getAllProducts: async () => {
    const result = await API.get("/products");
    console.log(result.data);
    return result.data;
  },
};
