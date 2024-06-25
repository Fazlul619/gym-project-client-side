import { useEffect, useState } from "react";

const useAllTrainer = () => {
  const [allTrainers, setAllTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://assignment-12-server-side-six.vercel.app/allTrainers")
      .then((res) => res.json())
      .then((data) => {
        setAllTrainers(data);

        setLoading(false);
      });
  }, []);

  return [allTrainers, loading];
};

export default useAllTrainer;
