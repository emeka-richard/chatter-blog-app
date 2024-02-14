import { createBrowserRouter } from "react-router-dom";
import HeroPageLayout from "../layouts/HeroPageLayout";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import AppLayout from "../layouts/AppLayout";
import ErrorPage from "../UI/Error-Page";
import HeroPageUI from "../UI/HeroPage-UI/HeroPage-UI";
import RegisterUI from "../UI/AuthPage-UI/Register-UIs/Register-UI";

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
        // element: <RegisterUI />,
        element: <div>This is where the login form is displayed</div>,
      },
      {
        path: "/register",
        element: <RegisterUI />,
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
