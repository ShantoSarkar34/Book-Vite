import { createBrowserRouter } from "react-router";
import React from "react";
import Root from "../../components/root/Root";
import ErrorPage from "../error/ErrorPage";
import Home from "../Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
    ],
  },
]);
