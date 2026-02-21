"use client";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  // Variants for staggered children
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Very subtle background texture (optional – remove if too much) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-black tracking-[-0.04em] text-white leading-none"
          >
            LUNA
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mt-8 text-3xl md:text-5xl font-light text-zinc-400 tracking-wide"
          >
            Summer 2025
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-10 text-xl md:text-2xl text-zinc-500 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Elevated essentials. Fearless elegance. Timeless pieces crafted for
            the present.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button
              size="lg"
              className="h-14 px-10 text-lg font-medium bg-white text-black hover:bg-zinc-200 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => navigate("/home/")}
            >
              Enter the Collection
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 md:py-48 bg-black text-center border-t border-zinc-900">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white">
            Your Signature Awaits
          </h2>

          <p className="mt-10 text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed font-light">
            Redefine effortless style. Discover pieces that move with you.
          </p>

          <div className="mt-16">
            <Button
              size="lg"
              className="h-16 px-16 text-xl font-semibold bg-white text-black hover:bg-zinc-200 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-100"
            >
              Choose your style
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-12 text-center text-zinc-600 text-sm border-t border-zinc-900">
        © 2025 LUNA — All rights reserved by (Shailendra) .
      </footer>
    </div>
  );
}
