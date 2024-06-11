import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const PaymentPage = () => {
  const { paymentData, packageName } = useParams();
  const parsedPaymentData = JSON.parse(decodeURIComponent(paymentData));
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const price =
    (packageName === "basic" && 10) ||
    (packageName === "standard" && 50) ||
    (packageName === "premium" && 100);

  const handlePayment = () => {
    const paymentInfo = {
      trainerName: parsedPaymentData?.name,
      time: parsedPaymentData.time,
      package: packageName,
      price,
      userName: user?.displayName,
      userEmail: user?.email,
      slot: parsedPaymentData.slot,
      trainerEmail: parsedPaymentData.trainerEmail,
    };
    axiosSecure
      .post("/paymentInfo", paymentInfo)
      .then((res) => {
        if (res.data.insertedId) {
          console.log("payment successful");

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "payment successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })

      .catch((error) => {
        console.log(error.message);
      });
  };

  const bgColor =
    packageName === "basic"
      ? "bg-gray-300"
      : packageName === "standard"
      ? "bg-yellow-200/75"
      : "bg-cyan-400/70";

  return (
    <div className="grid place-items-center">
      <h1 className="text-5xl text-center font-semibold font-mono my-10 underline underline-offset-8 decoration-cyan-400">
        Proceed to Pay
      </h1>

      <div
        className={`flex flex-col gap-5 my-5 ${bgColor} px-6 py-5 rounded-md`}
      >
        <div className="flex items-center gap-3 border-b-2 border-orange-300 pb-2">
          <img
            className="w-8"
            src="https://i.ibb.co/Pm2sc9G/label.png"
            alt="Name icon"
          />
          <h2 className="text-2xl font-semibold">
            <span className="font-bold">Trainer: </span>
            {parsedPaymentData.name}
          </h2>
        </div>

        <div className="flex items-center gap-3 border-b-2 border-orange-300 pb-2">
          <img
            className="w-8"
            src="https://i.ibb.co/2W8rpGY/timetable.png"
            alt="slot icon"
          />

          <p className="text-2xl font-semibold">
            <span className="font-bold">Selected Slot:</span>{" "}
            {parsedPaymentData.slot}
            {", "}
            {parsedPaymentData.time}
          </p>
        </div>

        <div className="flex items-center gap-3 border-b-2 border-orange-300 pb-2">
          <img
            className="w-8"
            src="https://i.ibb.co/SQb6099/gym-4.png"
            alt="membership icon"
          />

          <p className="text-2xl font-bold">
            {packageName[0].toUpperCase() + packageName.slice(1)} Membership
          </p>
        </div>

        <div className="flex items-center gap-3 border-b-2 border-orange-300 pb-2">
          <img
            className="w-8"
            src="https://i.ibb.co/5nL13Kd/membership.png"
            alt="membership price icon"
          />

          <p className="text-2xl font-semibold">
            <span className="font-bold">Price:</span>
            {" $"}
            {`${
              (packageName === "basic" && 10) ||
              (packageName === "standard" && 50) ||
              (packageName === "premium" && 100)
            }`}
          </p>
        </div>

        <div className="flex items-center gap-3 border-b-2 border-orange-300 pb-2">
          <img
            className="w-8"
            src="https://i.ibb.co/B3mtZPP/user.png"
            alt="user icon"
          />
          <p className="text-2xl font-semibold">
            <span className="font-bold">Your Name: </span>
            {user?.displayName}
          </p>
        </div>

        <div className="flex items-center gap-3 border-b-2 border-orange-300 pb-2">
          <img
            className="w-8"
            src="https://i.ibb.co/4N21qsh/message.png"
            alt="email icon"
          />
          <p className="text-2xl font-semibold">
            <span className="font-bold">Email: </span>
            {user?.email}
          </p>
        </div>

        <button
          onClick={handlePayment}
          className={`text-xl px-2 py-3 rounded-md font-semibold ${
            packageName === "premium"
              ? "bg-yellow-200 hover:bg-yellow-200/75 duration-150"
              : " bg-cyan-400 hover:bg-cyan-400/70"
          }`}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
