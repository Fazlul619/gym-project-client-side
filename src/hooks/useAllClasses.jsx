import { useEffect, useState } from "react";

const useAllClasses = () => {
  const [allClasses, setAllClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/allClasses")
      .then((res) => res.json())
      .then((data) => {
        setAllClasses(data);

        setLoading(false);
      });
  }, []);

  return [allClasses, loading];
};

export default useAllClasses;
