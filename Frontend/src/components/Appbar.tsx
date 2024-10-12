import { Avatar } from "./BlogCard";

export const Appbar = () => {
  return (
    <div className="flex justify-between px-10 py-4 border-b">
      <div className="flex flex-col justify-center text-lg font-semibold">
        Medium
      </div>
      <div>
        <Avatar size={"big"} name="Raju" />
      </div>
    </div>
  );
};
