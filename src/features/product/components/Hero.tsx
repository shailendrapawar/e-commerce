import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Hero() {
  return (
    <section className="
      min-h-[calc(100vh-100px)]
      w-full 
      flex flex-col 
      items-center justify-center 
      text-center 
      px-6 sm:px-10 md:px-16 lg:px-24
      bg-gray-100
    ">
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="
          text-sm md:text-base 
          font-medium 
          tracking-wider 
          text-gray-500 
          uppercase 
          mb-6 md:mb-8
        "
      >
        NEW COLLECTION 2026
      </motion.p>

      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
          font-bold 
          tracking-tight 
          text-gray-900 
          leading-tight
          max-w-4xl
          mb-6 md:mb-8
        "
      >
        Curated for<br className="sm:hidden" /> modern living
      </motion.h1>

      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="
          text-lg sm:text-xl md:text-2xl 
          text-gray-600 
          max-w-3xl 
          mx-auto 
          leading-relaxed
          mb-10 md:mb-14
        "
      >
        Discover thoughtfully designed products that blend
        <br className="hidden sm:inline" />
        form, function, and sustainability.
      </motion.p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="
          flex flex-col sm:flex-row 
          items-center gap-5 md:gap-6
        "
      >
        <button
          className="
            group
            inline-flex items-center 
            gap-2
            px-8 py-4 
            text-base md:text-lg 
            font-medium 
            text-white 
            bg-black 
            rounded-full 
            hover:bg-gray-800 
            transition-colors
          "
        >
          Shop Now
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </button>

        <button
          className="
            inline-flex items-center 
            justify-center
            px-10 py-4 
            text-base md:text-lg 
            font-medium 
            text-gray-900 
            bg-white 
            border border-gray-300 
            rounded-full 
            hover:bg-gray-50 
            transition-colors
          "
        >
          Explore
        </button>
      </motion.div>
    </section>
  )
}