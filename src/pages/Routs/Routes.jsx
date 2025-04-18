import { createBrowserRouter } from "react-router";
import React from "react";
import Root from "../../components/root/Root";
import ErrorPage from "../error/ErrorPage";
import Home from "../Home/Home";
import ListedBook from "../listedBook/ListedBook";
import BookDetails from "../BookDetails/BookDetails";
import PageToRead from "../pagesToRead/PageToRead";

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
        path: "/listedBook",
        loader: () => fetch("./bookData.json"),
        Component: ListedBook,
      },
      {
        path: "/pages",
        Component: PageToRead,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("./bookData.json"),
        Component: BookDetails,
      },
    ],
  },
]);
