import HomeRoute from "components/HomeRoute";
import PrivateRoute from "components/PrivateRoute";
import Home from "pages/Home";
import Layout from "pages/Layout";
import Auth from "pages/Auth";

import Error404 from "pages/Error404";
import Favourites from "pages/Favourites";

import GenerateRecipe from "pages/GenerateRecipe";
import { Navigate } from "react-router-dom";
const routes = [
  {
    path: "/",
    element: <Layout />,
    auth: true,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/recipe",
        element: <GenerateRecipe />,
      },
      {
        path: "/favourites",
        element: <Favourites />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    home: true,
  },

  {
    path: "*",
    element: <Navigate to="/error" replace={true} />,
  },
  {
    path: "/error",
    element: <Error404/>
  }
];

const checkedRoutes = (routes) =>
  routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }

    if (route?.home) {
      route.element = <HomeRoute>{route.element}</HomeRoute>;
    }
    if (route?.children) {
      route.children = checkedRoutes(route.children);
    }

    return route;
  });

export default checkedRoutes(routes);
