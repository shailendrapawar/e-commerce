import { useQuery } from "@tanstack/react-query";
import ProductService from "../product.api";

const useGetAllProducts = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["all-products"],
    queryFn: ProductService.getAllProducts,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });

  return {
    isLoading,
    isError,
    data,
  };
};
export default useGetAllProducts;
