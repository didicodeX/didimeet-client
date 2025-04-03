import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import TestPage from "../pages/TestPage";

const PublicLayout = lazy(() => import("../layouts/PublicLayout"));
const HomePage = lazy(() => import("../pages/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const SignUpPage = lazy(() => import("../pages/SignUpPage"));
const DashboardPage = lazy(() => import("../pages/DashboardPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomePage /> },
      // { path: 'login', element: <LoginPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignUpPage /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "test", element: <TestPage /> },
    ],
  },
]);
