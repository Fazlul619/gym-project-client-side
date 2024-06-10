import { useEffect, useState } from "react";

const useAllNewsletterSubscriber = () => {
  const [allNewsletterSubscriber, setAllNewsletterSubscriber] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/subscriber")
      .then((res) => res.json())
      .then((data) => {
        setAllNewsletterSubscriber(data);

        setLoading(false);
      });
  }, []);

  return [allNewsletterSubscriber, loading];
};

export default useAllNewsletterSubscriber;
