import BlogCard from "../components/BlogCard";

const Blogs = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-xl">
        <BlogCard
          authorName={"Raju Kumar"}
          title={
            "10 Things Software Developers Should Buy on Amazon Prime Big Deal Days 2024"
          }
          content={
            "Hello guys! Amazon’s second Prime Day is here, and it’s the perfect opportunity to upgrade your developer toolkit without breaking the bank. Apart from Black Fridays and Cyber Monday, this is one event I always wait for to shop for the things I love."
          }
          publishedDate={"10 Sept. 2024"}
        />
         <BlogCard
          authorName={"Raju Kumar"}
          title={
            "10 Things Software Developers Should Buy on Amazon Prime Big Deal Days 2024"
          }
          content={
            "Hello guys! Amazon’s second Prime Day is here, and it’s the perfect opportunity to upgrade your developer toolkit without breaking the bank. Apart from Black Fridays and Cyber Monday, this is one event I always wait for to shop for the things I love."
          }
          publishedDate={"10 Sept. 2024"}
        />
         <BlogCard
          authorName={"Raju Kumar"}
          title={
            "10 Things Software Developers Should Buy on Amazon Prime Big Deal Days 2024"
          }
          content={
            "Hello guys! Amazon’s second Prime Day is here, and it’s the perfect opportunity to upgrade your developer toolkit without breaking the bank. Apart from Black Fridays and Cyber Monday, this is one event I always wait for to shop for the things I love."
          }
          publishedDate={"10 Sept. 2024"}
        />
      </div>
      
    </div>
  );
};

export default Blogs;
