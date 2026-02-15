import Home from "./pages/Home"
import Products from "./pages/Products"
import SingleProduct from "./pages/SingleProduct"

export const productRoutes = [
    {
        path: "/product/",
        index: true,
        element: <Home />
    },
    {
        path: "/product/category",
        element: <Products />
    },
    {
        path: "/product/:id",
        elment: <SingleProduct />
    }
]