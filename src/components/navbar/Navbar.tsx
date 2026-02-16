import { ShoppingBag, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { navContainer, navItem } from "@/shared/animations/navbarVariants";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <main
      className="
sticky top-0 z-50
    w-full h-24
    flex justify-center items-center px-2
bg-white/30 backdrop-blur-md
shadow-[2px_5px_15px_rgba(255,255,255,0.25)]
     "
    >
      <motion.section
        variants={navContainer}
        initial="hidden"
        animate="show"
        className="h-[70%] w-full max-w-[1000px] bg-white rounded-full
                   flex items-center justify-between px-5 sm:px-10 md:px-14
                   shadow-sm"
      >
        {/* LOGO */}
        <motion.h3
          variants={navItem}
          className="text-xl sm:text-2xl font-semibold tracking-wide"
          onClick={() => navigate("/home")}
        >
          SHOP
        </motion.h3>

        {/* SEARCH BAR */}
        <motion.div
          variants={navItem}
          whileFocus={{ scale: 1.02 }}
          className="h-10 w-[45%] bg-gray-200 rounded-full"
        >
          <Input
            id=""
            type="text"
            placeholder="Seach product"
            className=" h-full w-full text-sm sm:text-md outline-none border-none focus:outline-none focus:ring-0 focus-visible:ring-0"
          />
        </motion.div>

        {/* ACTION BUTTONS */}
        <motion.div variants={navItem} className="flex gap-2 items-center">
          {/* WISHLIST */}
          <motion.button
            whileHover={{ scale: 1.08, y: -1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center
                       rounded-full bg-gray-100 hover:bg-pink-400 hover:text-white
                       shadow-sm hover:shadow-md transition-all duration-300"
            onClick={() => navigate("/wishlist")}
          >
            <Heart className="size-5 sm:size-6" />
          </motion.button>

          {/* CART */}
          <motion.button
            whileHover={{ scale: 1.08, y: -1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center
                       rounded-full bg-gray-100 hover:bg-black hover:text-white
                       shadow-sm hover:shadow-md transition-all duration-300"
            onClick={() => navigate("/cart")}
          >
            <ShoppingBag className="size-5 sm:size-6" />
          </motion.button>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default Navbar;
