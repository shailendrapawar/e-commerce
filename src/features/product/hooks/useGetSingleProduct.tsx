import { useQuery } from "@tanstack/react-query";
import ProductService from "../product.api";
const { getSingleProduct } = ProductService;

const useGetSingleProduct = (id: string) => {
  if (!id) return null;
  const { isLoading, isError, data } = useQuery({
    queryKey: [`single-product`, id],
    queryFn: () => getSingleProduct(id),
    // staleTime: 0,
    staleTime: 1000 * 60 * 1, // 5 minutes
    // gcTime: 1000 * 60 * 10,
  });

  return {
    isLoading,
    isError,
    data,
  };
};
export default useGetSingleProduct;
