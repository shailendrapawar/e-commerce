import { ShoppingBag, Heart, Search } from "lucide-react";
import { motion } from "framer-motion";
import { navContainer, navItem } from "@/shared/animations/navbarVariants";
import { useNavigate } from "react-router-dom";
import useGetCart from "@/features/cart/hooks/useGetCart";

import profileImg from "@/assets/react.svg";
import { Diamond } from "lucide-react";
const Navbar = () => {
  const navigate = useNavigate();

  const { cartItemsLength } = useGetCart(1);

  return (
    <main className="sticky top-0 z-50 w-full h-24 flex justify-center items-center px-2 bg-white/30 backdrop-blur-md shadow-[2px_5px_15px_rgba(255,255,255,0.25)]">
      <motion.section
        variants={navContainer}
        initial="hidden"
        animate="show"
        className="h-[70%] w-full max-w-[1000px] bg-white rounded-full
                   flex items-center justify-between px-4 sm:px-10 md:px-14
                   shadow-sm relative"
      >
        {/* LOGO */}
        <motion.h3
          variants={navItem}
          className=" flex items-center gap-2 text-xl sm:text-2xl font-semibold tracking-wide"
          onClick={() => navigate("/home")}
        >
          {" "}
          <Diamond className="size-5" />
          <p className="text-md">LUNA</p>
        </motion.h3>

        {/* ACTION BUTTONS */}
        <motion.div variants={navItem} className="flex gap-4 items-center">
          {/* SEARCH PRODUCT  */}
          <motion.button
            whileHover={{ scale: 1.08, y: -1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="size-7 md:size-8 flex items-center justify-center
                       rounded-full bg-gray-100 hover:bg-black  hover:text-white
                       shadow-sm hover:shadow-md transition-all duration-300"
            onClick={() => navigate("/home/search")}
          >
            <Search className="size-4 sm:size-5" />
          </motion.button>
          {/* WISHLIST */}
          <motion.button
            whileHover={{ scale: 1.08, y: -1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="size-7 md:size-8 flex items-center justify-center
                       rounded-full bg-gray-100 hover:bg-pink-400 hover:text-white
                       shadow-sm hover:shadow-md transition-all duration-300"
            onClick={() => navigate("/wishlist")}
          >
            <Heart className="size-4 sm:size-5" />
          </motion.button>

          {/* CART */}
          <motion.button
            whileHover={{ scale: 1.08, y: -1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="size-7 md:size-8 flex items-center justify-center
                       rounded-full  bg-black text-white
                       shadow-sm hover:shadow-md transition-all duration-300
                        relative"
            onClick={() => navigate("/cart")}
          >
            <div className="h-5 w-5 bg-gray-100 text-black  font-medium rounded-full flex justify-center items-center absolute -top-2 -right-2">
              {cartItemsLength()}
            </div>
            <ShoppingBag className="size-4 sm:size-5" />
          </motion.button>

          {/* Profile */}
          <motion.button
            whileHover={{ scale: 1.08, y: -1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="size-9 sm:h-10 sm:w-10 flex items-center justify-center
                       rounded-full bg-gray-300 hover:bg-gray-200 hover:text-white
                       shadow-sm hover:shadow-md transition-all duration-300"
            // onClick={() => navigate("/cart")}
          >
            <img className="p-1" src={profileImg}></img>
          </motion.button>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default Navbar;
