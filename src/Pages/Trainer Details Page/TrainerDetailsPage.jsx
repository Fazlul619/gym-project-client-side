import { Link, useLoaderData } from "react-router-dom";

const TrainerDetailsPage = () => {
  const trainer = useLoaderData();
  const {
    name,
    email,
    details,
    experience,
    expertise,
    profileImage,
    selectedOptions,
    time,
    _id,
  } = trainer;

  return (
    <div className="flex gap-5 items-start w-full my-10">
      <div className="flex gap-y-5 flex-col flex-[0.7]">
        <div className="flex items-center gap-3">
          <img
            className="w-12"
            src="https://i.ibb.co/58MQQnZ/resume.png"
            alt="details icon"
          />

          <h1 className="text-3xl font-bold underline underline-offset-4 font-mono">
            Details of {name}
          </h1>
        </div>
        <img
          src={profileImage}
          className="h-96 object-cover w-full rounded-tl-3xl rounded-br-3xl"
          alt="Trainer's photo"
        />
        <p className="font-serif text-3xl font-semibold text-red-800">{name}</p>
        <div className="w-full flex justify-between font-semibold">
          <div className="flex gap-2 items-center">
            <img
              className="w-6 h-6"
              src="https://i.ibb.co/zV1zqDY/user-experience.png"
              alt=""
            />

            <p className="text-xl font-bold">
              {`${experience} ${
                parseInt(experience, 10) > 1 ? "Years" : "Year"
              }`}{" "}
              of experiences
            </p>
          </div>
          <div className="flex gap-2">
            <img
              className="w-6 h-6 items-center"
              src="https://i.ibb.co/Z881kdx/best-customer-experience.png"
              alt=""
            />

            <p className="text-xl font-bold">{expertise}</p>
          </div>
        </div>
        <p className="text-blue-600 font-bold font-serif">
          <a
            className="text-2xl underline underline-offset-2"
            href={`mailto:${email}`}
          >
            Email Me!
          </a>
        </p>

        <p className="text-justify font-semibold text-lg">{details}</p>
      </div>

      <div className="flex-1 flex flex-col items-center gap-5">
        <div className="flex items-center gap-3">
          <img
            className="w-12"
            src="https://i.ibb.co/vkP4tCV/schedule.png"
            alt="available slots icon"
          />
          <h2 className="text-3xl font-mono font-bold underline underline-offset-4">
            Available Slots
          </h2>
        </div>

        <div className="flex gap-3 flex-col">
          {selectedOptions.map((slot) => {
            return (
              <Link
                to={`/bookingTrainer/${_id}/${slot.value}`}
                key={slot.value}
                className="bg-cyan-300 text-xl px-3 py-2 rounded-sm text-center"
              >
                {slot.label}
              </Link>
            );
          })}
        </div>
        <Link
          className="bg-cyan-800 text-white px-4 py-2 text-2xl w-[50%] text-center mt-6 font-semibold rounded-sm hover:bg-cyan-700 duration-200"
          to="/beATrainerPage"
        >
          Become a Trainer
        </Link>
      </div>
    </div>
  );
};

export default TrainerDetailsPage;
