import axios from "axios";

export function getPosts(options) {
  return axios
    .get("http://127.0.0.1:3000/posts", options)
    .then((res) => res.data);
}

export function getPost(postId, options) {
  return axios.get(`http://127.0.0.1:3000/posts/${postId}`, options).then(res => res.data);
}
