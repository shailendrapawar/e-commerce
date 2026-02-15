// components/FreeShippingBanner.tsx
import { ArrowRight } from 'lucide-react';

export default function FreeShippingBanner() {
    return (
        <section className="bg-black text-white py-8 md:py-10 lg:py-12 rounded-lg mt-5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center text-center space-y-4 md:space-y-6">
                    {/* Main headline */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-wide">
                        Free shipping on orders over{" "}
                        <span className="font-semibold">$100</span>
                    </h2>

                    {/* Secondary text */}
                    <p className="text-base md:text-lg text-gray-300 max-w-2xl">
                        Plus easy 30-day returns on everything.
                    </p>

                    {/* CTA Button */}
                    <button
                        className="group mt-4 inline-flex items-center px-8 py-4 text-base md:text-lg font-medium text-black bg-white rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
                    >
                        Start Shopping
                        <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
        </section>
    );
}