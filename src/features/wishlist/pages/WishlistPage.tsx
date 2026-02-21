import Wishlist from "../components/Wishlist";
import { useWishlistStore } from "../store/useWishlistStore";

const WishlistPage = () => {
  const { wishlistProducts } = useWishlistStore((s) => s);

  // console.log(wishlistProducts);
  return (
    <main className="h-auto py-5 px-2  w-full flex flex-col gap-5">
      <h1 className="text-xl sm:text-2xl text-center sm:text-left font-bold">
        Your Wishlist ( items)
      </h1>
      <section>
        <Wishlist wishlistproducts={wishlistProducts} />
      </section>
    </main>
  );
};

export default WishlistPage;
