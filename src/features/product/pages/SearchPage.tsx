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

    const filteredItems = data?.filter((item: any) =>
      item?.title?.toLowerCase()?.includes(keyword?.toLowerCase()),
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
      <section className="h-10 flex justify-center gap-2">
        <Input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="bg-red-600 h-full max-w-60"
        />
        <Button className="h-full">Filter 1</Button>
        <Button className="h-full">Filter 2</Button>
      </section>

      <section className=" w-full h-auto py-5 px-2 gap-2 grid place-items-center grid-col-1 sm:grid-cols-2">
        {(searchResult?.length == 0 || keyword == "") && (
          <p className="text-center w-full col-span-2">Search some product</p>
        )}
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
