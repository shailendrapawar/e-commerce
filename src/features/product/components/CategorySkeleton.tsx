import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function CategorySkeleton({ index }: { index: number }) {
  return (
    <Skeleton className="">
      <Card className="w-full max-w-xs border-none bg-gray-200">
        <CardHeader className="text-center flex justify-center items-center">
          <Skeleton className="h-15 w-15 rounded-full bg-gray-100 " />
        </CardHeader>
        <CardContent className="flex flex-col gap-5 items-center justify-center">
          <Skeleton className="h-10 w-full bg-gray-100" />
          <Skeleton className="h-5 w-10 bg-gray-100" />
        </CardContent>
      </Card>
    </Skeleton>
  );
}
