import { useEffect, useState } from "react";

const useUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://assignment-12-server-side-six.vercel.app/allUsers")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);

        setLoading(false);
      });
  }, []);

  return [users, loading];
};

export default useUser;
