import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils"; // assuming you have clsx/tailwind-merge helper

export function WishlistItemSkeleton() {
  return (
    <div
      className={cn(
        "group relative flex w-full flex-col sm:flex-row sm:items-center",
        "gap-4 sm:gap-5 rounded-xl border bg-card p-4 sm:p-5",
        "shadow-sm transition-all duration-200",
      )}
    >
      {/* Image placeholder */}
      <Skeleton
        className={cn(
          "h-44 w-full sm:h-28 sm:w-28 sm:min-w-28",
          "rounded-lg bg-gradient-to-br from-muted/70 to-muted/40",
        )}
      />

      {/* Content area */}
      <div className="flex-1 flex flex-col gap-3 sm:gap-2.5 py-1 sm:py-0">
        {/* Title line + price area */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2.5">
          <div className="space-y-2.5 flex-1">
            <Skeleton className="h-6 w-5/6 max-w-[85%] rounded-md" />
            <Skeleton className="h-4 w-3/5 rounded-md opacity-70" />
          </div>

          {/* Price placeholder – right side on desktop */}
          <Skeleton className="h-7 w-24 sm:w-28 rounded-md self-start sm:self-center" />
        </div>

        {/* Actions row */}
        <div className="flex items-center gap-3 mt-1 sm:mt-3">
          <Skeleton className="h-9 w-36 sm:w-40 rounded-lg" />
          <Skeleton className="h-9 w-9 rounded-lg" />
        </div>
      </div>

      {/* Shine / loading shimmer effect */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 1.8,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 0.6,
        }}
      >
        <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      </motion.div>
    </div>
  );
}
