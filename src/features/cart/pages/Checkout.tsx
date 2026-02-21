// pages/Checkout.tsx   or   components/CheckoutPage.tsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  CreditCard,
  Truck,
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import useGetCart from "../hooks/useGetCart";

const CheckoutPage = () => {
  const navigate = useNavigate();

  const { cart, isLoading } = useGetCart(1);
  //   console.log(cart);
  const [step, setStep] = useState<"address" | "payment" | "confirm">(
    "address",
  );
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cart?.products?.reduce(
    (sum: any, item: any) => sum + item.price * item.qty,
    0,
  );
  const deliveryFee = 19;
  const total = subtotal + deliveryFee;

  const handlePlaceOrder = () => {
    // In real app: call your createOrder mutation here
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/30 px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-md relative flex flex-col "
        >
          {/* Expanding rings animation */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-64 h-64 rounded-full border-2 border-green-400/30"
                initial={{ scale: 0.1, opacity: 0 }}
                animate={{
                  scale: [0.1, 2],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2.4 + i * 0.5,
                  repeat: Infinity,
                  repeatDelay: i * 0.7,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Checkmark container */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 12,
              delay: 0.4,
            }}
            className="relative mx-auto mb-8"
          >
            <motion.div
              className="w-28 h-28 rounded-full bg-green-100/80 flex items-center justify-center backdrop-blur-sm"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
            >
              <motion.svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-600 "
              >
                <motion.polyline
                  points="20 6 9 17 4 12"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    pathLength: {
                      duration: 0.8,
                      ease: "easeInOut",
                      delay: 0.9,
                    },
                    opacity: { duration: 0.1, delay: 0.9 },
                  }}
                />
              </motion.svg>
            </motion.div>
          </motion.div>

          {/* Staggered text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.18 },
              },
            }}
          >
            <motion.h1
              variants={{
                hidden: { y: 40, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Order Placed!
            </motion.h1>

            <motion.p
              variants={{
                hidden: { y: 40, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              transition={{ duration: 0.7 }}
              className="text-lg text-muted-foreground mb-3"
            >
              Thank you for shopping with us
            </motion.p>

            <motion.p
              variants={{
                hidden: { y: 40, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              transition={{ duration: 0.7 }}
              className="text-base text-muted-foreground mb-10"
            >
              Wanna explore more products ?
            </motion.p>

            <motion.div
              variants={{
                hidden: { y: 40, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              transition={{ duration: 0.7 }}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto px-12"
                onClick={() => navigate("/home/")}
              >
                Continue shopping
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-12">
      {/* Sticky Header */}
      <div className="sticky top-0  z-10 bg-card/85 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-xl font-semibold">Checkout</h1>
          <div className="w-10" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-8 max-w-5xl">
        {/* Steps indicator */}
        <div className="flex justify-between mb-8 max-w-md mx-auto md:max-w-none">
          {["Address", "Payment", "Confirm"].map((label, index) => (
            <div key={label} className="flex flex-col items-center flex-1">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-all duration-300",
                  step === label.toLowerCase()
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : index < ["address", "payment", "confirm"].indexOf(step)
                      ? "bg-green-500 text-white border-green-500"
                      : "bg-muted text-muted-foreground border-muted",
                )}
              >
                {index + 1}
              </div>
              <span className="text-xs mt-2 text-muted-foreground font-medium">
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-5 gap-6 lg:gap-8">
          {/* Main content */}
          <div className="md:col-span-3 space-y-6">
            <AnimatePresence mode="wait">
              {step === "address" && (
                <motion.div
                  key="address"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Card className="border shadow-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin size={18} className="text-primary" />
                        Delivery Address
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-5 pt-2">
                      <div className="grid gap-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            placeholder="Shailendra Pawar"
                            defaultValue="Shailendra Pawar"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            placeholder="98765 43210"
                            defaultValue="9876543210"
                          />
                        </div>
                        <div>
                          <Label htmlFor="flat">Flat / House No.</Label>
                          <Input id="flat" placeholder="A-301, Green Park" />
                        </div>
                        <div>
                          <Label htmlFor="street">
                            Street / Society / Area
                          </Label>
                          <Input id="street" placeholder="Civil Lines" />
                        </div>
                        <div>
                          <Label htmlFor="landmark">Landmark (optional)</Label>
                          <Input id="landmark" placeholder="Near Big Bazaar" />
                        </div>
                      </div>

                      <Button
                        size="lg"
                        className="w-full"
                        onClick={() => setStep("payment")}
                      >
                        Continue to Payment
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {step === "payment" && (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Card className="border shadow-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CreditCard size={18} className="text-primary" />
                        Payment Method
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-2">
                      <RadioGroup defaultValue="upi" className="space-y-4">
                        <div className="border rounded-lg p-4 hover:border-primary transition-colors cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <RadioGroupItem value="upi" id="upi" />
                            <Label
                              htmlFor="upi"
                              className="flex-1 cursor-pointer font-medium"
                            >
                              UPI (Google Pay / PhonePe / Paytm)
                            </Label>
                          </div>
                        </div>

                        <div className="border rounded-lg p-4 hover:border-primary transition-colors cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <RadioGroupItem value="cod" id="cod" />
                            <Label
                              htmlFor="cod"
                              className="flex-1 cursor-pointer font-medium"
                            >
                              Cash on Delivery
                            </Label>
                          </div>
                        </div>

                        <div className="border rounded-lg p-4 hover:border-primary transition-colors cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <RadioGroupItem value="card" id="card" />
                            <Label
                              htmlFor="card"
                              className="flex-1 cursor-pointer font-medium"
                            >
                              Credit / Debit Card
                            </Label>
                          </div>
                        </div>
                      </RadioGroup>

                      <Button
                        size="lg"
                        className="w-full mt-8"
                        onClick={() => setStep("confirm")}
                      >
                        Review & Place Order
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {step === "confirm" && (
                <motion.div
                  key="confirm"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Card className="border shadow-sm">
                    <CardHeader>
                      <CardTitle>Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-2 space-y-6">
                      <div className="space-y-4">
                        {cart?.products.map((item: any) => (
                          <div
                            key={item.id}
                            className="flex justify-between items-center"
                          >
                            <div>
                              <p className="font-medium">{item.title}</p>
                              <p className="text-sm text-muted-foreground">
                                Qty: {item.qty} × ₹{item.price}
                              </p>
                            </div>
                            <p className="font-medium">
                              ₹{item.price * item.qty}
                            </p>
                          </div>
                        ))}
                      </div>

                      <Separator />

                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span>₹{subtotal}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Delivery Fee</span>
                          <span className="text-green-600">₹{deliveryFee}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between text-base font-bold">
                          <span>Total Amount</span>
                          <span>₹{total}</span>
                        </div>
                      </div>

                      <Button
                        size="lg"
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                        onClick={handlePlaceOrder}
                      >
                        Place Order • ₹{total}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Cart Summary – sticky on desktop */}
          <div className="md:col-span-2">
            <div className="sticky top-20 space-y-6">
              <Card className="border shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Cart Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span>Items ({cart?.products?.length})</span>
                      <span>₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      <Badge variant="secondary">₹{deliveryFee}</Badge>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-base font-bold">
                      <span>To Pay</span>
                      <span>₹{total}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-xs text-muted-foreground space-y-2">
                <p className="flex items-center gap-1.5">
                  <Truck size={14} />
                  Delivery in 10–25 minutes
                </p>
                <p>• Non-refundable delivery fee applies</p>
                <p>• Cash on delivery available in your area</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
