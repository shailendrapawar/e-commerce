import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import { Outlet } from "react-router-dom"

const ProductLayout = () => {

    return (
        <div className="min-h-screen w-full   relative  flex flex-col  items-center">
            <Navbar />

            <section className="min-h-[calc(100vh-100px)]  w-full max-w-250">
                <Outlet />
            </section>
            <Footer />
        </div>
    )
}
export default ProductLayout