// OrderSummary.tsx
import { Button } from "@/components/ui/button";     // ← optional: shadcn/ui
// or use native <button className="..."> if you don't want shadcn

export default function OrderSummary() {
    return (
        <div className=" col-span-1 w-full mx-auto bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-gray-50 px-5 py-4 border-b">
                <h2 className="text-xl font-semibold text-gray-900">
                    Order Summary
                </h2>
            </div>

            {/* Content */}
            <div className="px-5 py-6 space-y-5">
                {/* Items */}
                <div className="space-y-4">
                    <div className="flex justify-between text-gray-700">
                        <span>Subtotal</span>
                        <span className="font-medium">$249.99</span>
                    </div>

                    <div className="flex justify-between text-gray-700">
                        <span>Tax (8%)</span>
                        <span className="font-medium">$20.00</span>
                    </div>

                    <div className="flex justify-between text-gray-700">
                        <span>Shipping</span>
                        <span className="font-medium text-green-600">Free</span>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200" />

                {/* Total */}
                <div className="flex justify-between items-center pt-2">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-gray-900">$269.99</span>
                </div>
            </div>

            {/* Actions */}
            <div className="px-5 pb-6 space-y-3">
                <Button
                    className="w-full h-12 text-base font-medium bg-black hover:bg-gray-900 text-white rounded-lg"
                    size="lg"
                >
                    Checkout
                </Button>

                <button
                    className="
            w-full h-12 text-base font-medium 
            text-gray-700 hover:text-gray-900 
            border border-gray-300 hover:border-gray-400 
            rounded-lg transition-colors
          "
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    );
}