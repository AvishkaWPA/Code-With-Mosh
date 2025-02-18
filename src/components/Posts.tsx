import { useEffect, useState } from "react";
import Alert from "./Alert";
import axios, { AxiosError, CanceledError } from "axios";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/postss")
    //   .then((res) => {
    //     if (res.ok) return res.json();
    //   })
    //   .then((data) => setPosts(data))
    //   .catch((err) => setError(err.message))
    //   .finally(() => setLoading(false));

    const controller = new AbortController();

    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
        signal: controller.signal,
      })
      .then((res) => setPosts(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();

    // const fetchPosts = async () => {
    //   try {
    //     const res = await axios.get<Post[]>(
    //       "https://jsonplaceholder.typicode.com/posts"
    //     );
    //     setPosts(res.data);
    //   } catch (err) {
    //     setError((err as AxiosError).message);
    //   }
    // };

    // fetchPosts();
  }, []);

  const deletePost = (post: Post) => {
    setPosts(posts.filter((p) => p.id !== post.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + post.id)
      .catch((err) => {
        setError(err.message);
        setPosts([...posts, post]);
      });
  };

  const newPost = {
    id: 0,
    userId: 10,
    title: "Hello world",
    body: "this is a templete new post to check delete functinality",
  };

  const createPost = (post: Post) => {
    const originalPosts = [...posts];
    setPosts([...posts, post]);

    axios
      .post("https://jsonplaceholder.typicode.com/posts/", post)
      .then((res) => {
        setPosts([res.data, ...originalPosts]);
      })
      .catch((err) => {
        setError(err.message);
        setPosts(originalPosts);
      });
  };

  return (
    <>
      <h3>Posts</h3>
      {loading ? <Alert>Loading</Alert> : null}
      {error && <Alert>{error}</Alert>}
      <button onClick={() => createPost(newPost)} className="btn btn-primary">
        Create Post
      </button>
      {posts.map((post) => (
        <div className="card" style={{ marginTop: 10 }} key={post.id}>
          {/* <img src="..." className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
            <button onClick={() => deletePost(post)} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Posts;
