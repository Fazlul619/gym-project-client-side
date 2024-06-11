import { useEffect, useState } from "react";

const useForum = () => {
  const [allForums, setAllForums] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/allForumPost")
      .then((res) => res.json())
      .then((data) => {
        setAllForums(data);

        setLoading(false);
      });
  }, []);

  return [allForums, loading];
};

export default useForum;
