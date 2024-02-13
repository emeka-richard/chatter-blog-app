import { createBrowserRouter } from "react-router-dom";
import HeroPageLayout from "../layouts/HeroPageLayout";
import AuthLayout from "../layouts/AuthLayout";
import AppLayout from "../layouts/AppLayout";
import ErrorPage from "../UI/Error-Page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HeroPageLayout />,
        errorElement: <ErrorPage />,
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