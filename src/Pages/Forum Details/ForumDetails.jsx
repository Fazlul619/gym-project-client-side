import { Card } from "flowbite-react";
import { useLoaderData } from "react-router-dom";

const ForumDetails = () => {
  const forumPost = useLoaderData();
  const { name, title, details } = forumPost;
  return (
    <div>
      <Card className="w-full my-10">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-semibold">Name: {name}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {details}
        </p>
      </Card>
    </div>
  );
};

export default ForumDetails;
