import { Helmet } from "react-helmet";
import useAllClasses from "../../hooks/useAllClasses";
import useAllTrainer from "../../hooks/useAllTrainer";
import { useState } from "react";

const AllClassesPage = () => {
  const [allClasses] = useAllClasses();
  const [allTrainers] = useAllTrainer();
  const [searchedWords, setSearchedWords] = useState("");

  let searchedItems = allClasses.filter((cls) =>
    cls.className.toLowerCase().includes(searchedWords.toLowerCase())
  );

  return (
    <div className="my-10 flex flex-col gap-10">
      <Helmet>
        <title>Fitness Flow | All Classes Page</title>
      </Helmet>
      <div className="relative">
        <input
          className="w-full"
          type="text"
          placeholder="Search for a class!"
          onChange={(e) => setSearchedWords(e.target.value)}
        />

        <div className="absolute top-14 w-full px-2 py-5 flex flex-col gap-5">
          {searchedWords &&
            searchedItems.map((item) => {
              return (
                <div key={item._id} className="bg-gray-400">
                  <h5>{item.className}</h5>;
                </div>
              );
            })}
        </div>
      </div>
      <h1 className="text-5xl font-mono font-bold">
        Here are the available classes
      </h1>

      {allClasses.map((cls) => {
        const [selectedExpertiseWithEmail] = allTrainers.map((trainer) => ({
          expertise: trainer.selectedExpertise,
          email: trainer.email,
        }));
        console.log(selectedExpertiseWithEmail);
        const finalTrainers = allTrainers.filter(
          (trainer) => trainer.email === selectedExpertiseWithEmail.email
        );

        console.log(finalTrainers);

        return (
          <div key={cls._id} className="flex gap-5">
            <img
              className="w-64 rounded-md object-cover h-56"
              src={cls.image}
              alt="classes photo"
            />

            {finalTrainers.map((trainer) => {
              const [hasExpertise] = trainer.selectedExpertise.map(
                (expertise) =>
                  expertise.label.toLowerCase() === cls.className.toLowerCase()
              );

              console.log(hasExpertise);

              return (
                <div
                  className="flex items-start gap-3 flex-col"
                  key={trainer._id}
                >
                  <h2 className="text-left font-semibold">{cls.className}</h2>
                  <p className="text-base font-semibold">{cls.details}</p>
                  {hasExpertise && (
                    <img
                      className="w-20 rounded-full h-20 object-cover"
                      src={trainer.profileImage}
                      alt=""
                    />
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default AllClassesPage;
