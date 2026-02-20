import React from "react";
import {
  Item,
  ItemGroup,
  ItemMedia,
  ItemTitle,
  ItemDescription,
} from "@/components/ui/item";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useWishlistStore } from "../store/useWishlistStore";
import { useNavigate } from "react-router-dom";

const Wishlist = ({ wishlistproducts }: { wishlistproducts: any[] }) => {
  const { removeFromWishlist } = useWishlistStore();
  const navigate = useNavigate();

  if (!wishlistproducts?.length) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <Heart
          className="h-16 w-16 text-muted-foreground/40 mb-6"
          strokeWidth={1.5}
        />
        <h3 className="text-xl font-medium mb-2">Your wishlist is empty</h3>
        <p className="text-muted-foreground max-w-md">
          Start saving items you love by clicking the heart icon on products.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-5 md:gap-6">
      <ItemGroup className="flex flex-col gap-4 md:gap-5">
        {wishlistproducts.map((item) => {
          const itemId = item.id ?? item.title; // fallback key – better to use real id when possible

          return (
            <motion.div
              key={itemId}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              layout
              className="w-full"
              onClick={() => navigate(`/home/products/${item?.id}`)}
            >
              <Item
                variant="outline"
                className={cn(
                  "group relative overflow-hidden transition-all duration-200",
                  "hover:shadow-sm hover:border-primary/40",
                  "min-h-[110px] sm:min-h-[100px]",
                )}
                asChild
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4">
                  {/* Image container – centered + flex for better containment */}
                  <ItemMedia
                    variant="image"
                    className="w-full sm:w-24 sm:max-w-24 h-52 sm:h-24 rounded-md overflow-hidden bg-muted/40 flex items-center justify-center"
                  >
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className={cn(
                        "max-w-full max-h-full w-auto h-auto object-contain",
                        "transition-transform duration-500 ease-out",
                        "group-hover:scale-105",
                      )}
                    />
                  </ItemMedia>

                  {/* Main content */}
                  <div className="flex-1 flex flex-col gap-3 sm:gap-2">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                      <ItemTitle className="font-medium leading-tight line-clamp-2 md:line-clamp-1 text-base sm:text-lg">
                        {item.title}
                      </ItemTitle>

                      <ItemDescription className="text-lg font-semibold text-primary sm:text-right whitespace-nowrap">
                        ${(item.price ?? 0).toFixed(2)}
                      </ItemDescription>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 mt-1 sm:mt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className={cn(
                          "text-xs sm:text-sm text-destructive hover:text-destructive/90 gap-1.5",
                          "sm:opacity-0 sm:group-hover:opacity-100 sm:translate-y-1 sm:group-hover:translate-y-0",
                          "opacity-70 hover:opacity-100",
                        )}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (item?.id) removeFromWishlist(item.id);
                        }}
                      >
                        <Trash2 size={14} />
                        Remove
                      </Button>

                      <Button
                        variant="default"
                        size="sm"
                        className={cn(
                          "text-xs sm:text-sm font-medium gap-1.5",
                          "min-w-[140px] sm:min-w-[160px]",
                          "sm:opacity-0 sm:group-hover:opacity-100 sm:translate-y-1 sm:group-hover:translate-y-0",
                          "opacity-100",
                        )}
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add move-to-cart logic here
                        }}
                      >
                        <ShoppingBag size={14} />
                        Move to cart
                      </Button>
                    </div>
                  </div>
                </div>
              </Item>
            </motion.div>
          );
        })}
      </ItemGroup>
    </div>
  );
};

export default Wishlist;
