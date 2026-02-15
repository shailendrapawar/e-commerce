"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom"
export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-slate-950 to-black text-white overflow-hidden">

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
                {/* Background glows */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.1, ease: "easeOut" }}
                        className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent"
                    >
                        LUNA
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="mt-8 text-3xl md:text-4xl lg:text-5xl font-light text-zinc-300 tracking-wide"
                    >
                        Summer 2025
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 1 }}
                        className="mt-10 text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        Elevated essentials. Fearless elegance.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3, duration: 0.9 }}
                        className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Button
                            size="lg"
                            className="h-14 px-10 text-lg font-medium bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-900/30 transition-all duration-300 group"
                            onClick={() => navigate("/auth/login")}
                        >
                            Enter Collection
                            <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="h-14 px-10 text-lg font-medium border-zinc-700 text-zinc-200 hover:bg-zinc-900/60 hover:text-white transition-all duration-300"
                        >
                            View Lookbook →
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Final CTA / Closing Statement */}
            <section className="relative py-40 md:py-52 bg-gradient-to-t from-black via-slate-950 to-transparent text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_0%,transparent_70%)]" />

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="relative z-10 max-w-4xl mx-auto px-6"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                        Your Signature Awaits
                    </h2>

                    <p className="mt-10 text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
                        Redefine effortless style. Discover pieces that move with you.
                    </p>

                    <div className="mt-16">
                        <Button
                            size="lg"
                            className="h-16 px-16 text-xl font-semibold bg-white text-black hover:bg-zinc-200 transition-all duration-300 shadow-2xl hover:shadow-white/10 transform hover:scale-105"
                        >
                            Begin Your Journey →
                        </Button>
                    </div>
                </motion.div>
            </section>

            {/* Optional subtle footer */}
            <div className="py-12 text-center text-zinc-600 text-sm">
                © 2025 LUNA — All rights reserved.
            </div>

        </div>
    );
}