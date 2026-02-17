import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

export default function CartList(products: any) {
  console.log(products);
  if (!products) return;

  return (
    <div className="flex w-full flex-col gap-6 ">
      <ItemGroup className="gap-4 flex flex-col items-center">
        {products?.map((data: any) => (
          <Item
            className="w-full max-w-150"
            key={data?.title}
            variant="outline"
            asChild
            role="listitem"
          >
            <a href="#">
              <ItemMedia variant="image">
                <img
                  src={data?.image}
                  alt={data?.title}
                  width={32}
                  height={32}
                  className="object-cover grayscale"
                />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="line-clamp-1">
                  {data?.title} -{" "}
                  <span className="text-muted-foreground">{data?.album}</span>
                </ItemTitle>
                <ItemDescription>{data?.artist}</ItemDescription>
              </ItemContent>
              <ItemContent className="flex-none text-center">
                <ItemDescription>{data?.duration}</ItemDescription>
              </ItemContent>
            </a>
          </Item>
        ))}
      </ItemGroup>
    </div>
  );
  return null;
}
