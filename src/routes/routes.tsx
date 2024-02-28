import { Navigate, createBrowserRouter } from "react-router-dom";
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
import FeedsForYouContentUI from "../UI/AppLayout-UI/Feeds-UIs/Feeds-ForYou-Content-UI";
import FeedsFeaturedContentUI from "../UI/AppLayout-UI/Feeds-UIs/Feeds-Featured-Content-UI";
import FeedsRecentContentUI from "../UI/AppLayout-UI/Feeds-UIs/Feed-Recent-Content-UI";
// import CreateArticleUI from "../UI/AppLayout-UI/Create-Article-UIs/Create-Article-UI";
import CreatePostUI from "../UI/AppLayout-UI/Create-Article-UIs/Create-Post-UI";
import PublishArticleLayout from "../layouts/PublishArticleLayout";
import ArticlePreview from "../UI/AppLayout-UI/Create-Article-UIs/Preview-Article-UI";
import AnalyticsUI from "../UI/AppLayout-UI/Analytics-UIs/Analytics-UI";
import AnalyticsEachArticleUI from "../UI/AppLayout-UI/Analytics-UIs/Analytics-Each-Article-UI";
import AnalyticsAllArticleUI from "../UI/AppLayout-UI/Analytics-UIs/Analytics-All-Articles-UI";


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
            element: <AuthRegLogFrame />,
            children: [
              {
                index: true,
                element: <Navigate to={"/auth/sign/register"} />, 
              },    
              {
                path: "/auth/sign/login",
                element: <LoginUI />,
                // element: <div>This is where the login form is displayed</div>,
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
        path: "/feeds",
        element: <FeedsUI />,
        
        children: [
          {
            index: true,
            element: <Navigate to={"/feeds/all"} />, 
          },
          {
            path: "/feeds/all",
            element: <FeedsForYouContentUI />
          },
          {
            path: "/feeds/featured",
            element: <FeedsFeaturedContentUI />,
          },
          {
            path: "/feeds/recent",
            element: <FeedsRecentContentUI />,
          },
        ],
      },
      {
        path: "/article",
        element: <PublishArticleLayout />,
        children: [
          {
            path: "/article/publish",
            element: <CreatePostUI />
          },
          {
            path: "/article/preview",
            element: <ArticlePreview />
          },

        ]
      },
      {
        path:"/analytics",
        element: <AnalyticsUI />,
        children: [
          {
            index: true,
            element: <AnalyticsAllArticleUI />, 
          },
          {
            path: "/analytics/:id",
            element: <AnalyticsEachArticleUI />,
          }
        ]
      },
    ],
  },
]);

export default router;
