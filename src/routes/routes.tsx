import { createBrowserRouter } from "react-router-dom";
import HeroPageLayout from "../layouts/HeroPageLayout";
import AuthLayout from "../layouts/AuthLayout";
import AppLayout from "../layouts/AppLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HeroPageLayout />,
        children: [
            {
                element: <AuthLayout />
            },
            {
                element: <AppLayout />
            }
        ]
    }
])

export default router;