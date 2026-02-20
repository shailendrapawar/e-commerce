import { Suspense } from "react";
import CategoryGrid from "@/features/product/components/CategoryGrid";
import Hero from "@/features/product/components/Hero";
import FeaturedProducts from "@/features/product/components/FeaturedProducts";
import FreeShippingBanner from "@/features/product/components/ShippingBanner";

const Home = () => {
  return (
    <main className="w-full h-auto  px-2">
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <FreeShippingBanner />
    </main>
  );
};
export default Home;
