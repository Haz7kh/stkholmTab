import { useEffect, useState } from "react";
import { getPosts } from "../api";
import "../styles/Blogg.css";
import Hero from "../components/Hero";

const Blogg = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="blogg-container">
      <Hero pageTitle="Blogg" />
      <h1 className="blogg-title">Blog Posts</h1>
      <ul className="blogg-list">
        {posts.map((post) => (
          <li key={post._id} className="blogg-item">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            {post.photo && (
              <img
                src={`http://localhost:3000/${post.photo}`}
                alt={post.title}
                className="blogg-photo"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogg;
