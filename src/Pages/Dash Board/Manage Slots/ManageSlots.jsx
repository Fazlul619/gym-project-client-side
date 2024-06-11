import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const ManageSlots = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: paymentInfo = [], refetch } = useQuery({
    queryKey: ["paymentInfo"],
    queryFn: async () => {
      const res = await axiosSecure.get("/paymentInfo");
      return res.data;
    },
  });

  const currentTrainersBookedSlots = paymentInfo.filter(
    (info) => user.email == info.trainerEmail
  );

  const handleSlotDelete = (slot) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/paymentInfo/${slot._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center w-full justify-between">
        <h1 className="text-2xl font-bold w-1/2">Slot Name</h1>

        <div className="flex items-center w-1/2">
          <h2 className="flex-1 text-left font-bold text-2xl">Booked by</h2>
          <p className="flex-1 text-left font-bold text-2xl">Email</p>
          <span className="flex-1 text-left font-bold text-2xl">Delete</span>
        </div>
      </div>
      {currentTrainersBookedSlots.map((slot) => {
        return (
          <div
            key={slot._id}
            className="flex items-center w-full justify-between bg-gray-300 rounded-md gap-5 px-4 py-2"
          >
            <h1 className="text-2xl font-semibold w-1/2">{slot.slot}</h1>

            <div className="flex items-center gap-5 w-1/2">
              <h2 className="flex-1 text-left font-semibold">
                {slot.userName}
              </h2>
              <p className="flex-1 text-left font-semibold">{slot.userEmail}</p>
              <button
                className="flex-1 text-left font-semibold bg-gray-500 py-2 pl-2 rounded-md"
                onClick={() => handleSlotDelete(slot)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ManageSlots;
