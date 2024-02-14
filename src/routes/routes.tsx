import { createBrowserRouter } from "react-router-dom";
import HeroPageLayout from "../layouts/HeroPageLayout";
import AuthLayout from "../layouts/AuthLayout";
import AppLayout from "../layouts/AppLayout";
import ErrorPage from "../UI/Error-Page";
import HeroPageUI from "../UI/HeroPage-UI/HeroPage-UI";

const router = createBrowserRouter([
    {
        element: <HeroPageLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HeroPageUI />,
            },
        ],
    },
    {
        element: <AuthLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/login",
                element: <HeroPageUI />,
            },
            {
                path: "/register",
                element: <HeroPageUI />,
            },
        ],
    },
    {
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/home",
                element: <HeroPageUI />,
            },
        ],
    },
]);

export default router;
