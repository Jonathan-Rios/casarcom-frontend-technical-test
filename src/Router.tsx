import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { User } from "./pages/User";

export function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
