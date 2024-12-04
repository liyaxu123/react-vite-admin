import { createBrowserRouter } from "react-router";
import App from "../App.tsx";
import Login from "../pages/Login/index.tsx";
import Home from "../pages/Home/index.tsx";
import About from "../pages/About/index.tsx";
import Register from "../pages/Register/index.tsx";
import NotFount from "../pages/NotFount/index.tsx";

const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    Component: Register,
  },
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "home",
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
    ],
  },
  {
    path: "*",
    Component: NotFount,
  },
]);

export default router;
