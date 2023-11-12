import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root.jsx";
import Home from "./pages/Home.jsx";
import Gallery from "./pages/Gallery.jsx";
import Favorites from "./pages/Favorites.jsx";
import Error from "./Error.jsx";

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
