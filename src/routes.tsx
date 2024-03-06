import { createBrowserRouter } from "react-router-dom";

import { Favorites } from "@/pages/Favorites";
import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import { User } from "@/pages/User";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/nao-encontrado/:notFoundText",
    element: <NotFound />,
  },
  {
    path: "/favoritos",
    element: <Favorites />,
  },
  {
    path: "/usuario/:gitUser",
    element: <User />,
  },
]);
