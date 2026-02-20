import { Button } from "@/components/ui/button";
import { useMemo } from "react";

export default function OrderSummary({ cart }: { cart: any }) {
  const summary = useMemo(() => {
    const cartAmount =
      cart?.products?.reduce((acc: number, item: any) => {
        const t = item?.price * item?.qty;
        return acc + t;
      }, 0) || 0;

    const taxAmount = (cartAmount * 8) / 100;
    const netAmount = cartAmount + taxAmount;

    return {
      cartAmount,
      taxAmount,
      netAmount,
    };
  }, [cart]);

  return (
    <div className="col-span-1 w-full mx-auto bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="bg-gray-50 px-5 py-4 border-b">
        <h2 className="text-xl font-semibold text-gray-900">Order Summary</h2>
      </div>

      <div className="px-5 py-6 space-y-5">
        <div className="space-y-4">
          <div className="flex justify-between text-gray-700">
            <span>Subtotal</span>
            <span className="font-medium">
              ${summary.cartAmount.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between text-gray-700">
            <span>Tax (8%)</span>
            <span className="font-medium">${summary.taxAmount.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-gray-700">
            <span>Shipping</span>
            <span className="font-medium text-green-600">Free</span>
          </div>
        </div>

        <div className="border-t border-gray-200" />

        <div className="flex justify-between items-center pt-2">
          <span className="text-lg font-bold text-gray-900">Total</span>
          <span className="text-2xl font-bold text-gray-900">
            ${summary.netAmount.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="px-5 pb-6 space-y-3">
        <Button className="w-full h-12 text-base font-medium bg-black hover:bg-gray-900 text-white rounded-lg">
          Checkout
        </Button>

        <button className="w-full h-12 text-base font-medium text-gray-700 hover:text-gray-900 border border-gray-300 hover:border-gray-400 rounded-lg transition-colors">
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
