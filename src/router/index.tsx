import { lazy } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import DashboardLayout from "@/layouts/dashboard";
import { ErrorRoutes } from "./routes/error-routes";
import AuthGuard from "./components/auth-guard";

const { VITE_APP_HOMEPAGE: HOMEPAGE } = import.meta.env;

const LoginRoute = {
  path: "/login",
  Component: lazy(() => import("@/pages/systerm/login")),
};

const PAGE_NOT_FOUND_ROUTE = {
  path: "*",
  element: <Navigate to="/404" replace />,
};

export default function Router() {
  // 需要权限的路由
  const permissionRoutes = [
    {
      path: "home",
      Component: lazy(() => import("@/pages/Home")),
    },
    {
      path: "about",
      Component: lazy(() => import("@/pages/About")),
    },
  ];

  const asyncRoutes = {
    path: "/",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      { index: true, element: <Navigate to={HOMEPAGE} replace /> },
      ...permissionRoutes,
    ],
  };

  const routes = [LoginRoute, asyncRoutes, ErrorRoutes, PAGE_NOT_FOUND_ROUTE];
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}
