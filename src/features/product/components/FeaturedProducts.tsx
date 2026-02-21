import { Button } from "@/components/ui/button";
import ProductCard from "./productCard/ProductCard";
import ProductCardSkeleton from "./productCard/ProductCardSkeleton";
import useGetAllProducts from "../hooks/useGetAllProducts";

import { useWishlistStore } from "@/features/wishlist/store/useWishlistStore";
import useGetCart from "@/features/cart/hooks/useGetCart";

const FeaturedProducts = () => {
  const { data, isLoading } = useGetAllProducts(5);
  const { addToCart } = useGetCart(1);

  const { isWishlistProduct, toggleWishlistProduct } = useWishlistStore(
    (s) => s,
  );

  return (
    <main className=" min-h-[calc(100vh-100px)] w-full flex flex-col text-center px-2">
      <section className="w-full mt-4 text-left flex justify-between">
        {/* Title */}
        <span className="text-2xl font-medium md:text-4xl text-center text-gray-900 6">
          Featured Products
        </span>

        <Button variant={"ghost"}>View All</Button>
      </section>

      {/* //data */}
      <section className="mt-5 w-full gap-5 h-auto grid grid-cols-1 lg:grid-cols-2 place-items-center">
        {isLoading
          ? [...Array(4)]?.map((_, i) => {
              return <ProductCardSkeleton key={i} index={i} />;
            })
          : data?.slice(0, 4)?.map((featuredProduct: any, i: number) => {
              return (
                <ProductCard
                  key={i}
                  data={featuredProduct}
                  isFeatured={true}
                  toggleWishlistProduct={toggleWishlistProduct}
                  isWishlistProduct={isWishlistProduct(featuredProduct?.id)}
                  addToCart={addToCart}
                />
              );
            })}
      </section>
    </main>
  );
};
export default FeaturedProducts;
