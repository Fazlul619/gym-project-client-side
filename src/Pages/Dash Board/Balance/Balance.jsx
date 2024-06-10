import useAllNewsletterSubscriber from "../../../hooks/useAllNewsletterSubscriber";
import usePaymentInfo from "../../../hooks/usePaymentInfo";
const Balance = () => {
  const [allNewsletterSubscriber] = useAllNewsletterSubscriber();
  const [allPaymentInfo] = usePaymentInfo();

  console.log(allPaymentInfo);
  let sum = 0;

  allPaymentInfo.map((info) => (sum = sum + info.price));

  return (
    <div className="font-semibold text-3xl text-center">
      <div>
        <h2>Total Balance: {sum}</h2>
      </div>

      {allPaymentInfo.slice(0, 6).map((info) => {
        return (
          <div key={info._id}>
            <h3>{info.userName}</h3>
            <p>{info.userEmail}</p>
            <p>{info.package}</p>
            <div>
              <p>{info.slot}</p>
              <span>{info.time}</span>
            </div>
            <p>Trainer Name: {info.trainerName}</p>
            <p>{info.price}</p>
          </div>
        );
      })}

      <div></div>
    </div>
  );
};

export default Balance;
