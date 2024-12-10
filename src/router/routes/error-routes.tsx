/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from "react";
import { Outlet } from "react-router";

import { CircleLoading } from "@/components/loading";
import SimpleLayout from "@/layouts/simple";

import AuthGuard from "../components/auth-guard";

const Page403 = lazy(() => import("@/pages/systerm/error/Page403"));
const Page404 = lazy(() => import("@/pages/systerm/error/Page404"));
const Page500 = lazy(() => import("@/pages/systerm/error/Page500"));

/**
 * error routes
 * 403, 404, 500
 */
export const ErrorRoutes = {
  element: (
    <AuthGuard>
      <SimpleLayout>
        <Suspense fallback={<CircleLoading />}>
          <Outlet />
        </Suspense>
      </SimpleLayout>
    </AuthGuard>
  ),
  children: [
    { path: "403", element: <Page403 /> },
    { path: "404", element: <Page404 /> },
    { path: "500", element: <Page500 /> },
  ],
};
