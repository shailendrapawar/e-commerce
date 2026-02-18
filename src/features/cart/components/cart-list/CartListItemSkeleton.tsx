// CartListSkeleton.tsx
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

export function CartListSkeleton() {
  return (
    <div className="relative flex w-full items-center gap-4 rounded-lg border bg-card p-4 shadow-sm overflow-hidden">
      {/* Base placeholders */}
      <Skeleton className="size-20 rounded-md bg-muted" />

      <div className="flex-1 space-y-3">
        <Skeleton className="h-5 w-4/5 rounded bg-muted" />
        <Skeleton className="h-4 w-3/5 rounded bg-muted" />
        <Skeleton className="h-8 w-28 rounded-full bg-muted" />
      </div>

      <Skeleton className="h-6 w-24 rounded bg-muted" />

      {/* Moving shimmer overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none"
        initial={{ x: "-120%" }}
        animate={{ x: "120%" }}
        transition={{
          duration: 1.6,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 0.4,
        }}
      />
    </div>
  );
}
