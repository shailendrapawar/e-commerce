import { Button } from "@/components/ui/button";
import ProductCard from "./productCard/ProductCard";
import ProductCardSkeleton from "./productCard/ProductCardSkeleton";
import useGetAllProducts from "../hooks/useGetAllProducts";

import { Key } from "lucide-react";

const FeaturedProducts = () => {
  const { data, isLoading, isError } = useGetAllProducts();
  //   const data = [
  //     {
  //       id: 10,
  //       title: "Premium Black Leather Backpack",
  //       slug: "premium-black-leather-backpack",
  //       price: 129,
  //       description:
  //         "Upgrade your everyday carry with this premium black leather backpack. Designed with multiple compartments, durable zippers, and a padded laptop sleeve, it combines elegance with functionality for work or travel.",
  //       category: {
  //         id: 2,
  //         name: "Accessories",
  //         slug: "accessories",
  //         image: "https://i.imgur.com/2nCt3Sbl.jpg",
  //         creationAt: "2026-02-15T15:21:31.000Z",
  //         updatedAt: "2026-02-15T15:21:31.000Z",
  //       },
  //       images: [
  //         "https://i.imgur.com/UsFIvYs.jpeg",
  //         "https://i.imgur.com/9LFjwpI.jpeg",
  //         "https://i.imgur.com/KVnksYw.jpeg",
  //       ],
  //       creationAt: "2026-02-15T15:21:31.000Z",
  //       updatedAt: "2026-02-15T15:21:31.000Z",
  //     },
  //     {
  //       id: 11,
  //       title: "Minimalist White Sneakers",
  //       slug: "minimalist-white-sneakers",
  //       price: 89,
  //       description:
  //         "Step into comfort with these minimalist white sneakers. Featuring a breathable upper, cushioned sole, and timeless design, they pair effortlessly with both casual and semi-formal outfits.",
  //       category: {
  //         id: 1,
  //         name: "Clothes",
  //         slug: "clothes",
  //         image: "https://i.imgur.com/QkIa5tT.jpeg",
  //         creationAt: "2026-02-15T15:21:31.000Z",
  //         updatedAt: "2026-02-15T15:21:31.000Z",
  //       },
  //       images: [
  //         "https://i.imgur.com/axsyGpD.jpeg",
  //         "https://i.imgur.com/Y54Bt8P.jpeg",
  //         "https://i.imgur.com/sC0ztOB.jpeg",
  //       ],
  //       creationAt: "2026-02-15T15:21:31.000Z",
  //       updatedAt: "2026-02-15T15:21:31.000Z",
  //     },
  //     {
  //       id: 12,
  //       title: "Modern Wireless Headphones",
  //       slug: "modern-wireless-headphones",
  //       price: 149,
  //       description:
  //         "Experience immersive sound with these modern wireless headphones. Equipped with noise cancellation, long battery life, and soft ear cushions for extended comfort.",
  //       category: {
  //         id: 3,
  //         name: "Electronics",
  //         slug: "electronics",
  //         image: "https://i.imgur.com/ZANVnHE.jpeg",
  //         creationAt: "2026-02-15T15:21:31.000Z",
  //         updatedAt: "2026-02-15T15:21:31.000Z",
  //       },
  //       images: [
  //         "https://i.imgur.com/yVeIeDa.jpeg",
  //         "https://i.imgur.com/qa9u8Yq.jpeg",
  //         "https://i.imgur.com/7D7I6dI.jpeg",
  //       ],
  //       creationAt: "2026-02-15T15:21:31.000Z",
  //       updatedAt: "2026-02-15T15:21:31.000Z",
  //     },
  //     {
  //       id: 13,
  //       title: "Elegant Stainless Steel Wrist Watch",
  //       slug: "elegant-stainless-steel-wrist-watch",
  //       price: 199,
  //       description:
  //         "Add sophistication to your style with this elegant stainless steel wrist watch. Featuring a precision quartz movement, scratch-resistant glass, and a sleek silver finish.",
  //       category: {
  //         id: 2,
  //         name: "Accessories",
  //         slug: "accessories",
  //         image: "https://i.imgur.com/2nCt3Sbl.jpg",
  //         creationAt: "2026-02-15T15:21:31.000Z",
  //         updatedAt: "2026-02-15T15:21:31.000Z",
  //       },
  //       images: [
  //         "https://i.imgur.com/1twoaDy.jpeg",
  //         "https://i.imgur.com/FDwQgLy.jpeg",
  //         "https://i.imgur.com/BLDByXp.jpeg",
  //       ],
  //       creationAt: "2026-02-15T15:21:31.000Z",
  //       updatedAt: "2026-02-15T15:21:31.000Z",
  //     },
  //   ];

  console.log(data);
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
          ? [...Array(4)]?.map((item, i) => {
              return <ProductCardSkeleton key={i} index={i} />;
            })
          : data?.slice(0, 4)?.map((featuredProduct: object, i: number) => {
              return (
                <ProductCard key={i} data={featuredProduct} isFeatured={true} />
              );
            })}
      </section>
    </main>
  );
};
export default FeaturedProducts;
