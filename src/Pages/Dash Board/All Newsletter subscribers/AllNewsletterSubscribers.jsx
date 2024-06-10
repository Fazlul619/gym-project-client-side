import useAllNewsletterSubscriber from "../../../hooks/useAllNewsletterSubscriber";

const AllNewsletterSubscribers = () => {
  const [allNewsletterSubscriber] = useAllNewsletterSubscriber();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between underline list-none">
        <div className="w-1/2">
          <li className="text-xl font-bold">Name</li>
        </div>
        <div className="w-1/2">
          <li className="text-xl font-bold">Email</li>
        </div>
      </div>
      {allNewsletterSubscriber.map((subscriber) => (
        <div
          key={subscriber._id}
          className="flex justify-between items-center w-full"
        >
          <div className="w-1/2">
            <h2 className="text-xl font-semibold">{subscriber.name}</h2>
          </div>

          <div className="w-1/2">
            <p>{subscriber.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllNewsletterSubscribers;
