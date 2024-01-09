import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { postsRoute } from "./pages/PostsList";


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
    ],
  },
]);
