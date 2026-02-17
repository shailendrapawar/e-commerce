import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
// in466638
import { Plus, Minus } from 'lucide-react';

export default function CartList({ products, isLoading }: any) {
  console.log(products);
  if (!products) return;

  return (
    <div className="flex w-full flex-col gap-6 ">
      <ItemGroup className="gap-4 flex flex-col items-center">
        {products?.map((data: any) => (
          <Item
            className="w-full h-30 max-w-150"
            key={data?.title}
            variant="outline"
            asChild
            role="listitem"
          >
            <div className="">
              <ItemMedia variant="image" className=" size-20">
                <img
                  src={data?.image}
                  alt={data?.title}
                  width={40}
                  height={40}
                  className=" size-20 object-cover grayscale"
                />
              </ItemMedia>
              <ItemContent className="h-20 flex justify-between">
                <ItemTitle className="line-clamp-1">
                  {data?.title} -{" "}
                  <span className="text-muted-foreground">{data?.album}</span>
                </ItemTitle>

                <ItemDescription className="bg-yellow-300" >
                  <div className="bg-red-400 h-8 w-25 rounded-lg">

                  </div>
                </ItemDescription>
              </ItemContent>

              <ItemContent className="flex-none text-center">
                <ItemDescription>{data?.price}</ItemDescription>
              </ItemContent>

            </div>
          </Item>
        ))}
      </ItemGroup>
    </div>
  );
  return null;
}
