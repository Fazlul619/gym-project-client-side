import { useEffect, useState } from "react";

const usePaymentInfo = () => {
  const [allPaymentInfo, setAllPaymentInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://assignment-12-server-side-six.vercel.app/paymentInfo")
      .then((res) => res.json())
      .then((data) => {
        setAllPaymentInfo(data);

        setLoading(false);
      });
  }, []);

  return [allPaymentInfo, loading];
};

export default usePaymentInfo;
