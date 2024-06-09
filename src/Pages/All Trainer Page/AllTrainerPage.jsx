import { Helmet } from "react-helmet";
import useAllTrainer from "../../hooks/useAllTrainer";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const AllTrainerPage = () => {
  const [allTrainers] = useAllTrainer();

  return (
    <div className="my-10">
      <Helmet>
        <title>Fitness Flow | All Trainer Page</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allTrainers.map((trainer) => {
          return (
            <div key={trainer._id} className="w-full border-2 border-gray-300">
              <img
                className="w-full h-64 object-cover"
                src={trainer.profileImage}
                alt="trainer's profile picture"
              />
              <div className="px-2 py-4 flex flex-col gap-3">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {trainer.name}
                </h5>

                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Experience:{trainer.experience}
                </p>

                <div className="flex gap-3 text-white">
                  {trainer.selectedExpertise.map((expertise) => {
                    return (
                      <span
                        key={expertise.value}
                        className="bg-orange-500/80 px-2 py-1 rounded-sm font-bold"
                      >
                        {expertise.value}
                      </span>
                    );
                  })}
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
                <div>
                  <img
                    className="w-12 h-12"
                    src={trainer.socialIconImage}
                    alt=""
                  />
                </div>
                <Link to={`/trainerDetailsPage/${trainer._id}`}>
                  <Button className="w-full" gradientMonochrome="cyan">
                    Know More
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTrainerPage;
