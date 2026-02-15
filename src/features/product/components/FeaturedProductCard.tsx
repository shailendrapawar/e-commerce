import { Badge } from "@/components/ui/badge"

import { ShoppingBag } from "lucide-react"

export function FeaturedProductCard({ data }: any) {
    return (
        <main className="h-110 w-full max-w-100 bg-white rounded-lg overflow-hidden  transition-all ease-in-out shadow shadow-gray-200 hover:shadow-lg hover:shadow-gray-300">
            <section className="w-full h-[75%] bg-gray-200 relative">
                <Badge className="py-1.5 px-4 font-medium absolute right-5 top-5" variant={"destructive"}>Featured</Badge>
                {/* images */}
                <img src={data?.img} />
            </section>

            <section className="h-[25%] w-full flex flex-col gap-2 px-3 py-2">
                <div className="text-left">
                    <h2 className="">{data?.title}</h2>
                    <span className="text-sm  pl-2">Rating 4.0</span>
                </div>

                <div className="flex justify-between items-center">
                    <span className="font-medium"> ${data?.price} </span>
                    <span className={`h-9 w-9 flex justify-center items-center rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer`}><ShoppingBag height={"18"} width={"18"} /></span>
                </div>
            </section>
        </main>
    )
}
