// components/CategoryGrid.tsx
import { motion } from 'framer-motion';
import type React from 'react';

const fallbackData = {
    'electronics': {
        name: 'Electronics',
        emoji: '💻',
        itemCount: 42,
        bgColor: 'bg-blue-50',
        hoverColor: 'hover:bg-blue-100',
    },
    'clothes': {
        name: 'Clothes',
        emoji: '👕',
        itemCount: 156,
        bgColor: 'bg-green-50',
        hoverColor: 'hover:bg-green-100',
    },
    'furniture': {
        name: 'furniture',
        emoji: '🏡',
        itemCount: 89,
        bgColor: 'bg-amber-50',
        hoverColor: 'hover:bg-amber-100',
    },
    'shoes': {
        name: 'shoes',
        emoji: '⌚',
        itemCount: 67,
        bgColor: 'bg-purple-50',
        hoverColor: 'hover:bg-purple-100',
    },
    "miscellaneous": {
        name: 'miscellaneous',
        emoji: '📚',
        itemCount: 203,
        bgColor: 'bg-red-50',
        hoverColor: 'hover:bg-red-100',
    },

};


export default function CategoryGrid({ data, isLoading, isError }: any) {

    console.log(isLoading)
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 md:mb-16">
                    Shop by Category
                </h2>

                {/* Grid */}
                <div className=" grid grid-cols-2 gap-4 sm:grid-cols-3  lg:grid-cols-6">
                    {data?.map((category: any, index: number) => (
                        <motion.a
                            key={category.name}
                            // href={`/categories/${category.name.toLowerCase().replace(/ & /g, '-')}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                            className=" bg-gray-100 relative flex flex-col gap-3 items-center justify-start py-12 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 cursor-pointer"
                        >
                            {/* Background circle */}
                            <div
                                // src={category}
                                className={`w-10 h-10  rounded-full ${category.bgColor} group-hover:${category.hoverColor} transition-colors duration-300 flex items-center justify-center text-3xl shadow-sm`}
                            >
                                {category?.emoji || fallbackData[category.slug]?.emoji}
                            </div>

                            {/* Name */}
                            <h3 className="text-md font-semibold text-gray-900 text-center group-hover:text-gray-700 transition-colors">
                                {category.name}
                            </h3>

                            {/* Item count */}
                            <p className="mt-2 text-sm text-gray-500 font-medium absolute bottom-4">
                                {category.itemCount} items
                            </p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}