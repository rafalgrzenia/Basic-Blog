import { useLoaderData } from "react-router-dom";
import { getPost } from "../functions/Posts";

export function Post() {
  const post = useLoaderData();

  console.log(post);

  return (
    <>
      <h1 className="page-title">
        {post.title}
      </h1>
      <span className="page-subtitle">
        {/* Add user request and display user's name */}
      </span>
      <div>
       {post.body}
      </div>
      {/* Add comment section axios request and add them later */}
    </>
  );
}

function loader({ request: { signal }, params: { postId } }) {
  return getPost(postId, { signal });
}

export const postRoute = {
  loader,
  element: <Post />,
};
