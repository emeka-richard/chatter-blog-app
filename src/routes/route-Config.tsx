import { Route, Routes, createBrowserRouter } from "react-router-dom";
import HeroPageLayout from "../layouts/HeroPageLayout";
import AuthLayout from "../layouts/AuthLayout-layouts/AuthLayout";
import AppLayout from "../layouts/AppLayout-layouts/AppLayout";
import ErrorPage from "../UI/Error-Page";
import HeroPageUI from "../UI/HeroPage-UI/HeroPage-UI";
import RegisterUI from "../UI/AuthPage-UI/Register-UIs/Register-UI";
import AuthFrame from "../layouts/AuthLayout-layouts/Auth-Frame";
import AuthRegLogFrame from "../layouts/AuthLayout-layouts/Auth-Reg-Log-Layout/Auth-Reg-Log-Frame";
import AuthAccountVerfication from "../layouts/AuthLayout-layouts/Auth-Accout-Verify-Layout/Auth-acct-verfication";
import LoginUI from "../UI/AuthPage-UI/Login-UI/Login-UI";
import FeedsUI from "../UI/AppLayout-UI/Feeds-UIs/Feeds-UI";

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
        element: <AuthFrame />,
        children: [
          {
            path: "/auth/sign",
            element: <AuthRegLogFrame />,
            children: [
              {
                path: "/auth/sign/login",
                element: <LoginUI />,
              },
              {
                path: "/auth/sign/register",
                element: <RegisterUI />,
              },
            ],
          },
          {
            path: "/auth/account-verification",
            element: <AuthAccountVerfication />,
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
        path: "/feeds/*",
        element: (""
        //   <FeedsUI>
        //     <Routes>
        //         <Route index  />
        //       <Route
        //         // index= {true}
        //         // key={"default"}
        //         path="/feeds/all"
        //         element={<div>This is for all feeds</div>}
        //       />
        //       <Route
        //         path="/feeds/featured"
        //         element={<div>This is the feature layout</div>}
        //       />
        //       <Route
        //         path="/feeds/recent"
        //         element={<div>This is the recent layout</div>}
        //       />
        //     </Routes>
        //   </FeedsUI>
        ),
      },
    ],
  },
]);

export default router;
