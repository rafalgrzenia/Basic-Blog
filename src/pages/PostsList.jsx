import { Link, useLoaderData } from "react-router-dom";
import { getPosts } from "../functions/Posts";

export default function PostsList() {
  const posts = useLoaderData();

  console.log(posts);

  return (
    <>
      <h1 className="page-title">Posts</h1>
      <div className="card-grid">
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <div className="card-header">{post.title}</div>
            <div className="card-body">
              <div className="card-preview-text">{post.body}</div>
            </div>
            <div className="card-footer">
              <Link className="btn" to={`${post.id}`}>
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function loader({ request: { signal } }) {
  return getPosts({ signal });
}

export const postsRoute = {
  loader,
  element: <PostsList />,
};
