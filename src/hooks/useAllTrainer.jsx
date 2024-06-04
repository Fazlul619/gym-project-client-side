import { useEffect, useState } from "react";

const useAllTrainer = () => {
  const [allTrainers, setAllTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/allTrainers")
      .then((res) => res.json())
      .then((data) => {
        setAllTrainers(data);

        setLoading(false);
      });
  }, []);

  return [allTrainers, loading];
};

export default useAllTrainer;
