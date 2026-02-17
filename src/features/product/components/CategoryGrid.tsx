// components/CategoryGrid.tsx
import { motion } from "framer-motion";
import type React from "react";
import useGetAllCategories from "../hooks/useGetAllCategories";
import { CategorySkeleton } from "./CategorySkeleton";

const fallbackData = [
  {
    name: "Mobiles & Gadgets",
    emoji: "📱",
    itemCount: 521,
    bgColor: "bg-cyan-50",
    hoverColor: "hover:bg-cyan-100",
  },
  {
    name: "Clothing",
    emoji: "👕",
    itemCount: 943,
    bgColor: "bg-indigo-50",
    hoverColor: "hover:bg-indigo-100",
  },
  {
    name: "Footwear",
    emoji: "👟",
    itemCount: 312,
    bgColor: "bg-orange-50",
    hoverColor: "hover:bg-orange-100",
  },
  {
    name: "Kitchen & Dining",
    emoji: "🍽️",
    itemCount: 267,
    bgColor: "bg-emerald-50",
    hoverColor: "hover:bg-emerald-100",
  },
  {
    name: "Jewellery",
    emoji: "💍",
    itemCount: 154,
    bgColor: "bg-rose-50",
    hoverColor: "hover:bg-rose-100",
  },
  {
    name: "Sports & Fitness",
    emoji: "🏋️",
    itemCount: 98,
    bgColor: "bg-lime-50",
    hoverColor: "hover:bg-lime-100",
  },
];

export default function CategoryGrid() {
  const { data, isLoading, isError } = useGetAllCategories();

  // console.log(isLoading)
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 md:mb-16">
          Shop by Category
        </h2>

        {/* Grid */}
        <div className=" grid grid-cols-2 gap-4 sm:grid-cols-3  lg:grid-cols-6">
          {isLoading
            ? [...Array(6)].map((item, i) => (
                <CategorySkeleton key={i} index={i} />
              ))
            : fallbackData?.slice(0, 6)?.map((category: any, index: number) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                  className={`group relative flex flex-col items-center justify-start gap-3 py-12 px-6  bg-gray-50 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 cursor-pointer overflow-hidden `}
                >
                  {/* Colored background circle – changes on hover */}
                  <div
                    className={` w-14 h-14 rounded-full ${category.bgColor || "bg-gray-100"} group-hover:${category.hoverColor || "bg-gray-200"} transition-colors duration-300 flex items-center justify-center text-3xl shadow-sm`}
                  >
                    {category.emoji}
                  </div>

                  {/* Category name */}
                  <h3 className=" mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-800 transition-colors text-center">
                    {category.name}
                  </h3>

                  {/* Item count – positioned at bottom */}
                  <p className="mt-auto pt-4 text-sm text-gray-500 font-medium">
                    {category.itemCount} items
                  </p>
                </motion.a>
              ))}
        </div>
      </div>
    </section>
  );
}
