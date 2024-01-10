import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { postsRoute } from "./pages/PostsList";
import { usersRoute } from "./pages/UsersList";
import { todosRoute } from "./pages/TodosList";
import { postRoute } from "./pages/Post";
import { userRoute } from "./pages/User";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: "posts",
            children: [
              {
                index: true,
                ...postsRoute,
              },
              {
                path: ":postId",
                ...postRoute,
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
              {
                path: ":userId",
                ...userRoute,
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
          { path: "*", element: <h1>404 - Page Not Found</h1> },
        ],
      },
    ],
  },
]);
