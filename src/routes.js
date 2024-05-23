import NotFound from "./views/errors/NotFound";
import {
  Navigate,
} from "react-router-dom";
import Home from "./views/pages/home/Home";

export const routes = [
  {
    path: "/",
    // element: <HomeLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "404", element: <NotFound /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];