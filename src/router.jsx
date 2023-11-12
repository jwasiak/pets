import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./root.jsx";
import Home from "./pages/home.jsx";
import Gallery from "./pages/gallery.jsx";
import Favorites from "./pages/favorites.jsx";
import Error from "./error.jsx";

const routes = [
  {
    path: "/*",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
    ],
  },
];

const basename = "/pets";

export const router = createBrowserRouter(routes, { basename });
