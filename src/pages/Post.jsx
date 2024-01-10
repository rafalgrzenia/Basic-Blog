import { Link, useLoaderData } from "react-router-dom";
import { getPost } from "../functions/Posts";
import { getUser } from "../functions/users";
import { getComments } from "../functions/comments";

// TODO:

// On the Post page render out all of the comments for that post as well as the name for the user that created the post. Make the user name is a link to the user page.

export function Post() {
  const { post, comments, user } = useLoaderData();
  console.log(user);
  return (
    <>
      <h1 className="page-title">{post.title}</h1>
      <span class="page-subtitle">
        By: <Link to={`/users/${user.id}`}>{user.name}</Link>
      </span>
      <div>{post.body}</div>
      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        {comments.map((comment) => (
          <div className="card" key={comment.id}>
            <div className="card-body">
              <div className="text-sm mb-1">{comment.email}</div>
              {comment.body}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

async function loader({ request: { signal }, params: { postId } }) {
  const comments = getComments(postId, { signal });
  const post = await getPost(postId, { signal });
  const user = getUser(post.userId, { signal });
  return { post, comments: await comments, user: await user };
}

export const postRoute = {
  loader,
  element: <Post />,
};
