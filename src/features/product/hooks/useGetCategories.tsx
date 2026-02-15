import { QueryClient, useQuery, QueryClientProvider } from "@tanstack/react-query"
import ProductService from "../product.api"


export const queryClient = new QueryClient();

const useGetCategories = () => {

    // main fetching function
    const { data, isLoading, isError } = useQuery({
        queryKey: ["products-category"],
        queryFn: ProductService.getCategory,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 10,
    })

    return {
        data, isLoading, isError
    }
}
export default useGetCategories