import { lazy } from "react";
import HomeLayout from "src/layouts/HomeLayout";
import LoginLayout from "./layouts/LoginLayout";

export const routes = [
  {
    exact: true,
    path: "/",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/home/Home")),
  },
  {
    exact: true,
    path: "/login",
    layout: LoginLayout,
    component: lazy(() => import("src/views/auth/login/Login")),
  },
  {
    exact: true,
    path: "/sign-up",
    layout: LoginLayout,
    component: lazy(() => import("src/views/auth/signUp/SignUp")),
  },
  {
    exact: true,
    path: "/404",
    component: lazy(() => import("src/views/errors/NotFound")),
  },
];
