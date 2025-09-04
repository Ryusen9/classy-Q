import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomeLayout from "@/Layouts/HomeLayout";
import Login from "@/components/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default routes;
