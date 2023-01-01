import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error404, Login, Desktop } from "../pages/indexPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Error404 />,
  },
  {
    path: "/home",
    element: <Desktop />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
