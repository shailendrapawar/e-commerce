import { Suspense } from "react"
import CategoryGrid from "../components/CategoryGrid"
import Hero from "../components/Hero"
import useGetCategories from "../hooks/useGetCategories"
import FeaturedProducts from "../components/FeaturedProducts"
import FreeShippingBanner from "../components/ShippingBanner"

const Home = () => {
    const { data, isLoading, isError } = useGetCategories()

    return (
        <main className="w-full h-auto  px-2">

            <Hero />
            <CategoryGrid data={data} isLoading={isLoading} isError={isError} />
            <FeaturedProducts />
            <FreeShippingBanner />

        </main>
    )
}
export default Home