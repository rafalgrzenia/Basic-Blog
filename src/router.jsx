import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { postsRoute } from "./pages/PostsList";
import { usersRoute } from "./pages/UsersList";
import { todosRoute } from "./pages/TodosList";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "posts",
        children: [
          {
            index: true,
            ...postsRoute,
          },
        ],
      },
      {
        path: "users",
        children: [
          {
            index: true,
            ...usersRoute,
          },
        ],
      },
      {
        path: "todos",
        children: [
          {
            index: true,
            ...todosRoute,
          },
        ],
      },
    ],
  },
]);
