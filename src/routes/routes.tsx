import { Outlet, createBrowserRouter } from "react-router-dom";
import HeroPageLayout from "../layouts/HeroPageLayout";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import AppLayout from "../layouts/AppLayout";
import ErrorPage from "../UI/Error-Page";
import HeroPageUI from "../UI/HeroPage-UI/HeroPage-UI";
import RegisterUI from "../UI/AuthPage-UI/Register-UIs/Register-UI";
import AuthFrame from "../layouts/AuthLayout/Auth-Frame";
import AuthRegLogFrame from "../layouts/AuthLayout/Auth-Reg-Log-Layout/Auth-Reg-Log-Frame";
import AuthAccountVerfication from "../layouts/AuthLayout/Auth-Accout-Verify-Layout/Auth-acct-verfication";

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
        path: "/auth",
        // element: <div>This is the auth route <Outlet /> </div>,
        element: <AuthFrame />,
        children: [
          {
            path: "/auth/sign",
            // element: <div>This is the auth/sign route <Outlet /></div>,
            element: <AuthRegLogFrame />,
            children: [
              {
                path: "/auth/sign/login",
                // element: <RegisterUI />,
                element: <div>This is where the login form is displayed</div>,
              },
              {
                path: "/auth/sign/register",
                // element: <div>This is the auth/sign/register route</div>,
                element: <RegisterUI />,
              },
            ],
          },
          {
            path: "/auth/account-verification",
            element: <AuthAccountVerfication />,
            // element: <div>This holds the verification area</div>,
          },
        ],
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
