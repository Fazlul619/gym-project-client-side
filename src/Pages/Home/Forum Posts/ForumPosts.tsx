import React from "react";
import useForum from "../../../hooks/useForum";
import { Link } from "react-router-dom";
import { Button, Card } from "flowbite-react";

const ForumPosts = () => {
  const [allForums] = useForum();

  console.log(allForums);

  return (
    <div className="grid grid-cols-4 gap-5 place-items-center">
      {allForums.slice(0, 5).map((post) => {
        return (
          <Card className="max-w-sm" key={post._id}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {post.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-6">
              {post.details}
            </p>
            <Link
              to={`/forumDetails/${post._id}`}
              className="bg-cyan-400 rounded-md text-center py-2"
            >
              Read more
            </Link>
          </Card>
        );
      })}
    </div>
  );
};

export default ForumPosts;
