import { Input } from "@/components/ui/input";
import useGetAllProducts from "../hooks/useGetAllProducts";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import ProductCard from "../components/productCard/ProductCard";
import { useWishlistStore } from "@/features/wishlist/store/useWishlistStore";
import useScrollToTop from "@/shared/hooks/useScrollToTop";

const SearchPage = () => {
  useScrollToTop();
  const { data, isLoading, isError } = useGetAllProducts();
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState(data || []);

  const { isWishlistProduct, toggleWishlistProduct, addToCart } =
    useWishlistStore((s) => s);

  const searchProduct = (keyword: string) => {
    // console.log("searched....", data);

    const filteredItems = data?.filter(
      (item: any) =>
        item?.title?.toLowerCase()?.includes(keyword?.toLowerCase()) ||
        item?.category?.toLowerCase()?.includes(keyword?.toLowerCase()),
    );
    // console.log(filteredItems);
    setSearchResult(filteredItems);
  };

  // console.log("searched....", data);
  useEffect(() => {
    searchProduct(keyword);
  }, [keyword]);

  return (
    <div className="w-full h-full px-2">
      <section className=" mt-5 h-10 flex justify-center sm:justify-start gap-2">
        <Input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className=" h-full max-w-60 "
          placeholder="Search for product..."
        />
        <Button className="h-full">Filter 1</Button>
        <Button className="h-full">Filter 2</Button>
      </section>

      <section className=" w-full h-auto py-5 px-2 gap-2 grid place-items-center grid-col-1 sm:grid-cols-2">
        {keyword?.trim() != "" &&
          searchResult?.map((item: any, index: number) => {
            return (
              <ProductCard
                key={index}
                data={item}
                isFeatured={false}
                toggleWishlistProduct={toggleWishlistProduct}
                isWishlistProduct={isWishlistProduct(item?.id)}
                addToCart={addToCart}
              />
            );
          })}
      </section>
    </div>
  );
};

export default SearchPage;
