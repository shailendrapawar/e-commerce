// src/components/SingleProduct.jsx   (or .tsx)
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Heart, Minus, Plus, Star } from "lucide-react";
import useGetSingleProduct from "../hooks/useGetSingleProduct";
import { useParams } from "react-router-dom";
import useScrollToTop from "@/shared/hooks/useScrollToTop";
import { useWishlistStore } from "@/features/wishlist/store/useWishlistStore";
import { toast } from "sonner";
import { Item } from "@/components/ui/item";

function SingleProduct() {
  useScrollToTop();
  const [quantity, setQuantity] = useState(1);
  const { productId }: string | any = useParams();

  const { data, isLoading, isError }: any = useGetSingleProduct(productId);
  const { isWishlistProduct, toggleWishlistProduct } = useWishlistStore(
    (s) => s,
  );

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const formattedPrice =
    data?.price?.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    }) || "$0.00";

  const ratingStars = Math.round(data?.rating?.rate || 0);

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-muted-foreground">Loading product...</p>
      </div>
    );
  }

  if (isError || !data || !productId) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-center">
        <p className="text-destructive">Product not found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left - Product Image (smaller & controlled size) */}
        <div className="flex justify-center lg:justify-start">
          <Card className="overflow-hidden border border-border/60 shadow-sm w-full max-w-md lg:max-w-lg">
            <CardContent className="p-6 bg-muted/30">
              <img
                src={data?.image}
                alt={data?.title}
                className="w-full h-auto max-h-[300px] object-contain mx-auto"
              />
            </CardContent>
          </Card>
        </div>

        {/* Right - Product Info */}
        <div className="flex flex-col gap-6">
          {/* Title & Category */}
          <div>
            <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
              {data?.title}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground capitalize">
              {data?.category}
            </p>
          </div>

          {/* Price */}
          <div className="text-4xl md:text-5xl font-semibold">
            {formattedPrice}
            <span className="ml-3 text-xl font-normal text-muted-foreground">
              each
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < ratingStars
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {data?.rating?.rate} • {data?.rating?.count} reviews
            </span>
          </div>

          {/* Description */}
          <p className="text-base leading-relaxed text-muted-foreground">
            {data?.description}
          </p>

          {/* Quantity Selector + Actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4">
            <div className="flex items-center border rounded-md overflow-hidden">
              <Button
                variant="ghost"
                size="icon"
                className="h-11 w-11 rounded-none"
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>

              <div className="w-16 text-center text-lg font-medium border-x bg-background">
                {quantity}
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="h-11 w-11 rounded-none"
                onClick={increaseQuantity}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex gap-3 w-full sm:w-auto">
              <Button className="flex-1 h-11 gap-2">
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </Button>

              <button
                variant="outline"
                size="icon"
                className={` rounded-md flex justify-center items-center h-11 w-11 ${isWishlistProduct(data?.id) ? "bg-pink-500 text-white" : "border-2 border-pink-500 text-pink-500 "}  active:scale-95  transition-all ease-in-out`}
                onClick={() => {
                  toggleWishlistProduct(data);
                }}
                title={
                  isWishlistProduct(data?.id) == true
                    ? `Already in wishlist`
                    : "Add to wishlist"
                }
              >
                <Heart className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="details" className="mt-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="details">Product Details</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            </TabsList>

            <TabsContent
              value="details"
              className="pt-5 text-sm text-muted-foreground space-y-2"
            >
              <p>• Category: {data?.category}</p>
              <p>• Item ID: {data?.id}</p>
              <p>• Premium everyday backpack</p>
              <p>• Fits laptops up to 15 inches</p>
            </TabsContent>

            <TabsContent
              value="shipping"
              className="pt-5 text-sm text-muted-foreground space-y-2"
            >
              <p>• Free shipping on orders over $50</p>
              <p>• 30-day return policy</p>
              <p>• Ships within 1-2 business days</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
