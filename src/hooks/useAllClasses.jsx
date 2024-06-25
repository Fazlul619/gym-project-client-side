import { useEffect, useState } from "react";

const useAllClasses = () => {
  const [allClasses, setAllClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://assignment-12-server-side-six.vercel.app/allClasses")
      .then((res) => res.json())
      .then((data) => {
        setAllClasses(data);

        setLoading(false);
      });
  }, []);

  return [allClasses, loading];
};

export default useAllClasses;
