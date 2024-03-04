import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { User } from "./pages/User";
import { NotFound } from "./pages/NotFound";

export function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/nao-encontrado",
      element: <NotFound />,
    },
    {
      path: "/favoritos",
      element: <Favorites />,
    },
    {
      path: "/usuario",
      element: <User />,
    },
  ]);

  return <RouterProvider router={router} />;
}
