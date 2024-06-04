import { Helmet } from "react-helmet";
import useAllTrainer from "../../hooks/useAllTrainer";
import { Button, Card } from "flowbite-react";
const AllTrainerPage = () => {
  const [allTrainers] = useAllTrainer();
  console.log(allTrainers);
  return (
    <div className="my-10">
      <Helmet>
        <title>Fitness Flow | All Trainer Page</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allTrainers.map((trainer) => (
          <Card
            key={trainer._id}
            className="max-w-sm "
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
            <Button gradientMonochrome="cyan">Know More</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllTrainerPage;
