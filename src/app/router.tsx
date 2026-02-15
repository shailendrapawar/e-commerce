import AuthLayout from "@/_layouts/AuthLayout";
import ProductLayout from "@/_layouts/ProductLayout";
import RootLayout from "@/_layouts/RootLayout";
import { createBrowserRouter } from "react-router-dom"

import { authRoutes } from "@/features/auth/auth.routes";
import { productRoutes } from "@/features/product/product.routes";

export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [...authRoutes]
    },
    {
        path: "/product",
        element: <ProductLayout />,
        children: [...productRoutes]
    }
])