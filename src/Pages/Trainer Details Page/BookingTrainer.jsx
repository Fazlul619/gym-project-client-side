import { Link, useParams } from "react-router-dom";
import useAllTrainer from "../../hooks/useAllTrainer";

const BookingTrainer = () => {
  const param = useParams();
  const [allTrainers] = useAllTrainer();

  const filteredTrainer = allTrainers.filter(
    (trainer) => trainer._id === param.id
  );

  return (
    <>
      {filteredTrainer.map((trainerDetails) => {
        const paymentData = {
          name: trainerDetails.name,
          id: trainerDetails._id,
          slot: param.slot,
          time: trainerDetails.time,
        };

        return (
          <div key={trainerDetails._id} className="my-10">
            <h1 className="text-5xl text-center font-mono font-bold underline underline-offset-8 decoration-cyan-400">
              Book the trainer
            </h1>
            <div className="flex flex-col gap-5 my-10">
              <div className="flex items-center gap-3">
                <img
                  className="w-8"
                  src="https://i.ibb.co/Pm2sc9G/label.png"
                  alt="Name icon"
                />
                <h2 className="text-2xl font-semibold">
                  <span className="font-bold">Name:</span> {trainerDetails.name}
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <img
                  className="w-8"
                  src="https://i.ibb.co/2W8rpGY/timetable.png"
                  alt="slot icon"
                />

                <p className="text-2xl font-semibold">
                  <span className="font-bold">Selected Slot:</span> {param.slot}
                  {", "}
                  {trainerDetails.time}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <img
                  className="w-8"
                  src="https://i.ibb.co/HFc4q6N/trainer.png"
                  alt="Classes Icon"
                />
                <p className="text-2xl font-semibold">
                  <span className="font-bold">Classes:</span>{" "}
                  {trainerDetails.classes}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5 my-5">
                <img
                  className="w-12"
                  src="https://i.ibb.co/hmjwzmG/gym-3.png"
                  alt="package icon"
                />

                <h3 className="text-4xl font-semibold font-mono underline underline-offset-4 decoration-cyan-400">
                  Please select a suitable package:
                </h3>
              </div>

              <div className="flex border-2 border-cyan-400">
                {/* Basic package */}
                <div className="border-r-2 border-cyan-400 flex-1">
                  <h5 className="text-3xl font-semibold border-b-2 border-cyan-400 p-3 text-center">
                    Basic Membership
                  </h5>

                  <p className="p-3 font-semibold text-xl border-b-2 border-cyan-400 h-20">
                    Access to gym facilities during regular operating hours.
                  </p>
                  <p className="p-3 font-semibold text-xl border-b-2 border-cyan-400 h-20">
                    Use of cardio and strength training equipment.
                  </p>
                  <p className="p-3 font-semibold text-xl border-b-2 border-cyan-400 h-20">
                    Access to locker rooms and showers.
                  </p>
                  <p className="p-3 font-semibold text-xl border-b-2 border-cyan-400 h-14">
                    $10
                  </p>
                  <Link
                    to={`/paymentPage/basic/${encodeURIComponent(
                      JSON.stringify(paymentData)
                    )}`}
                  >
                    <p className="h-14 p-3 text-center font-semibold text-xl bg-cyan-400 hover:bg-cyan-400/75 duration-150">
                      Join Now
                    </p>
                  </Link>
                </div>

                {/* Standard Package */}
                <div className="border-r-2 border-cyan-400 flex-1">
                  <h5 className="text-3xl font-semibold border-b-2 border-cyan-400 p-3 text-center">
                    Standard Membership
                  </h5>

                  <p className="p-3 font-semibold text-xl border-b-2 border-cyan-400 h-20">
                    All benefits of the basic membership.
                  </p>
                  <p className="p-3 font-semibold text-xl border-b-2 border-cyan-400 h-20">
                    Access to group fitness classes such as yoga, spinning, and
                    Zumba.
                  </p>
                  <p className="p-3 font-semibold text-xl border-b-2 border-cyan-400 h-20">
                    Use of additional amenities like a sauna or steam room.
                  </p>
                  <p className="p-3 font-semibold text-xl border-b-2 border-cyan-400 h-14">
                    $50
                  </p>
                  <Link
                    to={`/paymentPage/standard/${encodeURIComponent(
                      JSON.stringify(paymentData)
                    )}`}
                  >
                    <p className="h-14 p-3 text-center font-semibold text-xl bg-cyan-400 hover:bg-cyan-400/75 duration-150">
                      Join Now
                    </p>
                  </Link>
                </div>

                {/* Premium Package */}
                <div className="flex-1">
                  <h5 className="text-3xl font-semibold border-b-2 border-cyan-400 p-3 text-center">
                    Premium Membership
                  </h5>

                  <p className="p-3 font-semibold text-xl border-b-2 border-cyan-400 h-20">
                    All benefits of the standard membership.
                  </p>
                  <p className="p-3 font-semibold text-xl border-b-2 border-cyan-400 h-20">
                    Access to personal training sessions with certified
                    trainers.
                  </p>
                  <p className="p-3 font-semibold text-xl border-b-2 border-cyan-400 h-20">
                    Discounts on additional services such as massage therapy or
                    nutrition counseling.
                  </p>
                  <p className="p-3 font-semibold text-xl border-b-2 border-cyan-400 h-14">
                    $100
                  </p>
                  <Link
                    to={`/paymentPage/premium/${encodeURIComponent(
                      JSON.stringify(paymentData)
                    )}`}
                  >
                    <p className="h-14 p-3 text-center font-semibold text-xl bg-cyan-400 hover:bg-cyan-400/75 duration-150">
                      Join Now
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BookingTrainer;
