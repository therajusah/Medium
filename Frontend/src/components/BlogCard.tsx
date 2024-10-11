interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <div className="p-4 pb-4 border-b border-slate-200">
      <div className="flex">
        <Avatar name={authorName} />

        <div className="flex flex-col justify-center pl-2 text-sm font-extralight">
          {authorName}
        </div>
        <div className="flex flex-col justify-center pl-2">
          <Circle />
        </div>
        <div className="pl-2 font-thin text-slate-500">
          {publishedDate}
        </div>
      </div>
      <div className="text-xl font-semibold">{title}</div>
      <div className="font-thin text-md">{content.slice(0, 100) + "..."}</div>
      <div className="pt-2 text-sm text-slate-400 fony-thin">
        <div>{`${Math.ceil(content.length / 100)} minutes`}</div>
      </div>
    </div>
  );
};

function Circle() {
  return <div className="w-1 h-1 rounded-full bg-slate-500"></div>;
}

function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-600 rounded-full">
      <span className="text-sm text-gray-600 dark:text-gray-300 font-extralight">
        {name[0]}
      </span>
    </div>
  );
}

export default BlogCard;
