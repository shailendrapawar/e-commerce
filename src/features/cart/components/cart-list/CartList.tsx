import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Plus, Minus } from "lucide-react";
import { CartListSkeleton } from "./CartListItemSkeleton";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import useGetCart from "../../hooks/useGetCart";

export default function CartList({
  products,
  isLoading,
}: {
  products: any[] | null | undefined;
  isLoading: boolean;
}) {
  const { deleteUserCart, removeFromCart } = useGetCart(1);

  if (isLoading) {
    return (
      <div className="flex col-span-3 w-full flex-col gap-6">
        <CartListSkeleton />
        <CartListSkeleton />
        <CartListSkeleton />
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="flex w-full flex-col gap-6 py-12 text-center text-muted-foreground">
        Your cart is empty
      </div>
    );
  }

  return (
    <div className="flex cols-span-3 md:col-span-2 w-full flex-col gap-6">
      <ItemGroup className="gap-4 flex flex-col">
        {products.map((data: any) => (
          <motion.div
            key={data?.title || Math.random()} // better to use real id when available
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            layout // smooth layout shifts when quantity changes
            className="w-full"
          >
            <Item className="w-full" variant="outline" asChild role="listitem">
              <div className="">
                <ItemMedia variant="image" className="size-20">
                  <motion.img
                    src={data?.image}
                    alt={data?.title}
                    width={80}
                    height={80}
                    className="size-20 object-contain grayscale"
                    initial={{ scale: 0.92, opacity: 0.7 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                  />
                </ItemMedia>

                <ItemContent className="h-20 flex justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <ItemTitle className="line-clamp-1">
                      {data?.title} -{" "}
                    </ItemTitle>

                    <ItemDescription className="text-xs">
                      ${data?.price}
                    </ItemDescription>
                  </div>

                  <section className="h-8 flex items-center justify-between cursor-pointer">
                    <div className="h-full flex rounded-full border gap-1 items-center">
                      <motion.button
                        whileTap={{ scale: 0.88 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                        className="h-full w-8 p-1.5 rounded-full hover:bg-gray-100  cursor-pointer transition-colors flex items-center justify-center"
                      >
                        <Minus className="size-4" />
                      </motion.button>

                      <motion.div
                        key={data?.qty} // re-animates when qty changes
                        initial={{ scale: 0.7 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                        className="h-full w-8 font-bold flex justify-center items-center"
                      >
                        {data?.qty}
                      </motion.div>

                      <motion.button
                        whileTap={{ scale: 0.88 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                        className="h-full w-8 p-1.5 rounded-full hover:bg-gray-100  cursor-pointer transition-colors flex items-center justify-center"
                      >
                        <Plus className="size-4" />
                      </motion.button>
                    </div>
                  </section>
                </ItemContent>

                <ItemContent className="flex justify-between items-center text-center h-20">
                  <ItemDescription>
                    ${(data?.qty * data?.price)?.toFixed(2) || "0.00"}
                  </ItemDescription>

                  <ItemDescription>
                    <Trash2
                      className="active:scale-95 transition-all"
                      size={"20"}
                      onClick={() => removeFromCart(data?.id)}
                    />
                  </ItemDescription>
                </ItemContent>
              </div>
            </Item>
          </motion.div>
        ))}
      </ItemGroup>
    </div>
  );
}
