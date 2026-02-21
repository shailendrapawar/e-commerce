import CategoryGrid from "../components/CategoryGrid";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import FreeShippingBanner from "../components/ShippingBanner";

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
