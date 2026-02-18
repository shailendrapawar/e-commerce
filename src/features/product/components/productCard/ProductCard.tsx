import { Badge } from "@/components/ui/badge";
import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { cardVariants } from "../../utils/animationVariants";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ data, isFeatured }: any) {
  const [featured] = useState(isFeatured);
  const navigate = useNavigate();
  return (
    <motion.main
      variants={cardVariants}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="group h-[440px] w-full max-w-[400px] bg-white rounded-2xl overflow-hidden
                 shadow-sm hover:shadow-xl hover:shadow-gray-200
                 transition-all duration-300"
      onClick={() => {
        navigate(`/home/products/${data?.id}`);
      }}
    >
      {/* IMAGE SECTION */}
      <section className="w-full h-[72%] bg-gray-100 relative overflow-hidden">
        {featured == true ? (
          <Badge
            className="py-1.5 px-4 font-medium absolute left-4 top-4 z-10"
            variant="destructive"
          >
            Featured
          </Badge>
        ) : (
          <></>
        )}

        <motion.img
          src={data?.image}
          alt={data?.title}
          className="w-full h-full object-contain p-10"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
      </section>

      {/* CONTENT */}
      <section className="h-[28%] w-full flex flex-col justify-between px-4 py-3">
        <div>
          <h2 className="font-semibold text-base line-clamp-1">
            {data?.title}
          </h2>
          <span className="text-sm text-gray-500">
            ⭐{data?.rating?.rate || 4.6} ({data?.rating?.count || 0})
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg">${data?.price}</span>

          {/* ADD TO CART BUTTON */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className="h-10 w-10 flex items-center justify-center rounded-full
                       bg-gray-100 hover:bg-black hover:text-white
                       transition-colors duration-300"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <ShoppingBag size={18} />
          </motion.button>
        </div>
      </section>
    </motion.main>
  );
}
