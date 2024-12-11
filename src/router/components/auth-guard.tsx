import { lazy, useCallback, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useRouter } from "../hooks";
import { useUserToken } from "@/store/userStore";

const PageError = lazy(() => import("@/pages/systerm/error/PageError"));

type Props = {
  children: React.ReactNode;
};
export default function AuthGuard({ children }: Props) {
  const router = useRouter();
  const { accessToken } = useUserToken();

  const check = useCallback(() => {
    if (!accessToken) {
      router.replace("/login");
    }
  }, [router, accessToken]);

  useEffect(() => {
    check();
  }, [check]);

  return (
    <ErrorBoundary FallbackComponent={PageError}>{children}</ErrorBoundary>
  );
}
