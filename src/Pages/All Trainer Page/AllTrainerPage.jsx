import { Helmet } from "react-helmet";
import useAllTrainer from "../../hooks/useAllTrainer";
import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";
const AllTrainerPage = () => {
  const [allTrainers] = useAllTrainer();
  console.log(allTrainers);
  return (
    <div className="my-10">
      <Helmet>
        <title>Fitness Flow | All Trainer Page</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allTrainers.map((trainer) => {
          return (
            <Card
              key={trainer._id}
              className="w-full"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={trainer.profileImage}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {trainer.name}
              </h5>
              <div className="flex justify-between">
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Experience:{trainer.experience}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Expertise:{trainer.expertise}
                </p>
              </div>
              <div className="flex gap-3 text-white">
                {trainer.selectedOptions.map((option) => {
                  return (
                    <span
                      key={option.value}
                      className="bg-black px-2 py-1 rounded-sm font-bold"
                    >
                      {option.value}
                    </span>
                  );
                })}
              </div>
              <p className="text-black">
                <span className="font-bold">Time:</span> {trainer.time}
              </p>
              <Link to={`/trainerDetailsPage/${trainer._id}`}>
                <Button className="w-full" gradientMonochrome="cyan">
                  Know More
                </Button>
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default AllTrainerPage;
