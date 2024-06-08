import Modal from "../../../components/Modal";
import useAllTrainer from "../../../hooks/useAllTrainer";
import useModal from "../../../hooks/useModal";

const AllTrainers = () => {
  const [allTrainers] = useAllTrainer();

  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex list-none underline">
        <div className="flex items-center w-full flex-[0.5] gap-5 text-xl font-bold">
          <li>Image</li>
          <li>Name</li>
        </div>
        <div className="flex-[1.5] w-full flex justify-between text-xl font-bold">
          <li className="flex-1 text-left">Email</li>
          <li className="flex-1 text-left">Age</li>
          <li className="flex-1 text-left">Experience</li>
          <li className="flex-1 text-right">Delete</li>
        </div>
      </div>
      {allTrainers.map((trainer) => {
        return (
          <li key={trainer._id} className="flex items-center w-full list-none">
            <div className="flex items-center gap-5 flex-[0.5]">
              <img
                className="w-16 h-16 rounded-full object-cover"
                src={trainer.profileImage}
                alt="trainer's profile pic"
              />

              <h2 className="text-xl font-semibold">{trainer.name}</h2>
            </div>

            <div className="flex-[1.5] w-full flex justify-between text-base font-semibold">
              <p className="flex-1 text-left">{trainer.email}</p>
              <p className="flex-1 text-left">{trainer.age} Years old</p>
              <p className="flex-1 text-left">
                {`${trainer.experience} ${
                  parseInt(trainer.experience, 10) > 1 ? "Years" : "Year"
                }`}{" "}
              </p>
              <div className="w-full flex-1 text-right">
                <button
                  className="bg-rose-500/70 px-3 py-1 rounded-sm"
                  onClick={openModal}
                >
                  Delete
                </button>

                <Modal isOpen={isOpen} onClose={closeModal}>
                  <div className="flex gap-5 flex-col">
                    <div>
                      <h1 className="text-2xl font-semibold font-mono">
                        Are you sure?
                      </h1>
                      <p className="text-xs">
                        Deleting a trainer will change their role to member.
                      </p>
                    </div>

                    <div className="flex gap-3 justify-end min-w-fit text-lg">
                      <button
                        onClick={() => {}}
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
              </div>
            </div>
          </li>
        );
      })}
    </div>
  );
};

export default AllTrainers;
