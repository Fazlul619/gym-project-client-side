import { useEffect, useState } from "react";

const useForum = () => {
  const [allForums, setAllForums] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://assignment-12-server-side-six.vercel.app/allForumPost")
      .then((res) => res.json())
      .then((data) => {
        setAllForums(data);

        setLoading(false);
      });
  }, []);

  return [allForums, loading];
};

export default useForum;
