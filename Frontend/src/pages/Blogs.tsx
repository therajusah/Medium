import { Appbar } from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import { useBlogs } from "../hooks";

interface Post {
  content: string;
  title: string;
  id: number;
  author: {
    name: string | null; 
  };
}

const Blogs = () => {
  const { loading, blogs, error } = useBlogs();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>; 
  }

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          {blogs.map((post: Post) => (
            <BlogCard
              key={post.id} 
              id={post.id}
              authorName={post.author?.name || "Anonymous"}
              title={post.title}
              content={post.content}
              publishedDate={"10 Sept. 2024"} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
