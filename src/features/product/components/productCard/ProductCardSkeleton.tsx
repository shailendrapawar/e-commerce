import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function FeaturedCardSkeleton({ index }: { index: number }) {
  return (
    <Skeleton
      className="h-[440px] w-full max-w-[400px]"
      style={{
        animationDuration: "1s",
        animationDelay: `${index * 120}ms`,
      }}
    >
      <Card className="w-full h-full border-none bg-gray-200 p-2">
        <Skeleton
          className="h-[70%] "
          style={{
            animationDelay: `${index * 120}ms`,
          }}
        />

        <CardContent className=" h-[30%] flex flex-col gap-2 items-start justify-between p-0">
          <section className="w-full h-[50%] flex flex-col justify-between items-center">
            <Skeleton className="h-8 w-full bg-gray-100" />
            <Skeleton className="h-5 w-[50%] bg-gray-100" />
          </section>
          <section className="w-full flex justify-between">
            <Skeleton className="h-10 w-15" />
            <Skeleton className="h-10 w-10 rounded-full" />
          </section>
        </CardContent>
      </Card>
    </Skeleton>
  );
}
