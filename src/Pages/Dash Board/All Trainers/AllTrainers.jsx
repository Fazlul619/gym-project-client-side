import { useQuery } from "@tanstack/react-query";
import Modal from "../../../components/Modal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useModal from "../../../hooks/useModal";
import Swal from "sweetalert2";

const AllTrainers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allUsers");
      return res.data;
    },
  });

  const { isOpen, openModal, closeModal } = useModal();

  const usersWhoAreTrainer = users.filter((user) => user.role === "trainer");

  const handleDeleteTrainer = (trainer) => {
    axiosSecure.patch(`/users/${trainer._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${trainer.name} is a Member Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between underline list-none">
        <div className="w-1/3">
          <li className="text-xl font-bold">Name</li>
        </div>
        <div className="w-1/3">
          <li className="text-xl font-bold">Email</li>
        </div>
        <div className="w-1/3 text-right">
          <li className="text-xl font-bold">Delete</li>
        </div>
      </div>
      {usersWhoAreTrainer.map((trainer) => (
        <div
          key={trainer._id}
          className="flex justify-between items-center w-full"
        >
          <div className="w-1/3">
            <h2 className="text-xl font-semibold">{trainer.name}</h2>
          </div>
          <div className="w-1/3">
            <p>{trainer.email}</p>
          </div>
          <div className="w-1/3 text-right">
            <button
              className="bg-rose-500/70 px-3 py-1 rounded-sm"
              onClick={openModal}
            >
              Delete
            </button>

            {isOpen && (
              <Modal isOpen={isOpen} onClose={closeModal}>
                <div className="flex flex-col gap-5">
                  <div>
                    <h1 className="text-2xl font-semibold font-mono">
                      Are you sure?
                    </h1>
                    <p className="text-xs">
                      Deleting a trainer will change their role to member.
                    </p>
                  </div>
                  <div className="flex justify-end gap-3 min-w-fit text-lg">
                    <button
                      onClick={() => handleDeleteTrainer(trainer)}
                      className="px-3 py-1 bg-rose-400 rounded-sm"
                    >
                      Delete
                    </button>
                    <button
                      className="px-3 py-1 bg-cyan-400 rounded-sm"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </Modal>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTrainers;
