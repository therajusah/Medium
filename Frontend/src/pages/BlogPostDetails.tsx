import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../cofig"; 

const BlogPostDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  interface Post {
    content: string;
    title: string;
    id: number;
    authorId: string;
    published: boolean; 
  }

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Authorization token not found.");
        }

        const response = await axios.get(`${BACKEND_URL}/api/v1/blog/post/${id}`, {
          headers: {
            Authorization: token,
          },
        });

        setPost(response.data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }


  const { title, content, authorId } = post!; 

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>Author ID: {authorId}</p>
    </div>
  );
};

export default BlogPostDetails;
