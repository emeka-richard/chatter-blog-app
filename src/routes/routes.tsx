import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

// Import lazy and Suspense for lazy loading
const { lazy, Suspense } = React;

// Lazy load the components
const HeroPageLayout = lazy(() => import("../layouts/HeroPageLayout"));
const AuthLayout = lazy(() => import("../layouts/AuthLayout-layouts/AuthLayout"));
const AppLayout = lazy(() => import("../layouts/AppLayout-layouts/AppLayout"));
const ErrorPage = lazy(() => import("../UI/Error-Page"));
const ProtectedRouteAuth = lazy(() => import("../middlewares/Protected-Route-Auth"));
const HeroPageUI = lazy(() => import("../UI/HeroPage-UI/HeroPage-UI"));
const RegisterUI = lazy(() => import("../UI/AuthPage-UI/Register-UIs/Register-UI"));
const AuthFrame = lazy(() => import("../layouts/AuthLayout-layouts/Auth-Frame"));
const AuthRegLogFrame = lazy(() => import("../layouts/AuthLayout-layouts/Auth-Reg-Log-Layout/Auth-Reg-Log-Frame"));
const AuthAccountVerification = lazy(()=> import("../layouts/AuthLayout-layouts/Auth-Accout-Verify-Layout/Auth-acct-verfication"))
const LoginUI = lazy(() => import("../UI/AuthPage-UI/Login-UI/Login-UI"));
const FeedsUI = lazy(() => import("../UI/AppLayout-UI/Feeds-UIs/Feeds-UI"));
const FeedsForYouContentUI = lazy(() => import("../UI/AppLayout-UI/Feeds-UIs/Feeds-ForYou-Content-UI"));
const FeedsFeaturedContentUI = lazy(() => import("../UI/AppLayout-UI/Feeds-UIs/Feeds-Featured-Content-UI"));
const FeedsRecentContentUI = lazy(() => import("../UI/AppLayout-UI/Feeds-UIs/Feed-Recent-Content-UI"));
const CreatePostUI = lazy(() => import("../UI/AppLayout-UI/Create-Article-UIs/Create-Post-UI"));
const PublishArticleLayout = lazy(() => import("../layouts/PublishArticleLayout"));
const ArticlePreview = lazy(() => import("../UI/AppLayout-UI/Create-Article-UIs/Preview-Article-UI"));
const AnalyticsUI = lazy(() => import("../layouts/AppLayout-layouts/AnalyticsLayout"));
const AnalyticsEachArticleUI = lazy(() => import("../UI/AppLayout-UI/Analytics-UIs/Analytics-Each-Article-UI"));
const AnalyticsAllArticleUI = lazy(() => import("../UI/AppLayout-UI/Analytics-UIs/Analytics-All-Articles-UI"));

const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <HeroPageLayout />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorPage />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HeroPageUI />
          </Suspense>
        ),
      },
    ],
  },
  {
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <AuthLayout />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorPage />
      </Suspense>
    ),
    children: [
      {
        path: "/auth",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AuthFrame />
          </Suspense>
        ),
        children: [
          {
            path: "/auth/sign",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <AuthRegLogFrame />
              </Suspense>
            ),
            children: [
              {
                index: true,
                element: <Navigate to={"/auth/sign/register"} />,
              },
              {
                path: "/auth/sign/login",
                element: (
                  <Suspense fallback={<div>Loading...</div>}>
                    <LoginUI />
                  </Suspense>
                ),
              },
              {
                path: "/auth/sign/register",
                element: (
                  <Suspense fallback={<div>Loading...</div>}>
                    <RegisterUI />
                  </Suspense>
                ),
              },
            ],
          },
          {
            path: "/auth/account-verification",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <ProtectedRouteAuth element={<AuthAccountVerification />} />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
  {
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProtectedRouteAuth element={<AppLayout />} />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorPage />
      </Suspense>
    ),
    children: [
      {
        path: "/feeds",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <FeedsUI />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: <Navigate to={"/feeds/all"} />,
          },
          {
            path: "/feeds/all",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <ProtectedRouteAuth element={<FeedsForYouContentUI />} />
              </Suspense>
            ),
          },
          {
            path: "/feeds/featured",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <ProtectedRouteAuth element={<FeedsFeaturedContentUI />} />
              </Suspense>
            ),
          },
          {
            path: "/feeds/recent",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <ProtectedRouteAuth element={<FeedsRecentContentUI />} />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/article",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRouteAuth element={<PublishArticleLayout />} />
          </Suspense>
        ),
        children: [
          {
            path: "/article/publish",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <ProtectedRouteAuth element={<CreatePostUI />} />
              </Suspense>
            ),
          },
          {
            path: "/article/preview",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <ProtectedRouteAuth element={<ArticlePreview />} />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/analytics",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRouteAuth element={<AnalyticsUI />} />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <AnalyticsAllArticleUI />
              </Suspense>
            ),
          },
          {
            path: "/analytics/:id",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <ProtectedRouteAuth element={<AnalyticsEachArticleUI />} />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
