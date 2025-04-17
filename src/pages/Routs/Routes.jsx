import { createBrowserRouter } from "react-router";
import React from "react";
import Root from "../../components/root/Root";
import ErrorPage from "../error/ErrorPage";
import Home from "../Home/Home";
import About from "../about/About";
import BookDetails from "../BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("bookData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/pages",
        element: <span>All pages are here</span>,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("./bookData.json"),
        Component: BookDetails,
      },
    ],
  },
]);
