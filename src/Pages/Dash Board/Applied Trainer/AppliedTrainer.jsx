import Modal from "../../../components/Modal";
import useAllTrainer from "../../../hooks/useAllTrainer";
import useModal from "../../../hooks/useModal";
import useSecondModal from "../../../hooks/useSecondModal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";

const AppliedTrainer = () => {
  const [allTrainers] = useAllTrainer();
  const [rejectionMessage, setRejectionMessage] = useState("");

  const refresh = () => {
    window.location.reload();
  };

  const pendingTrainers = allTrainers.filter(
    (trainer) => trainer.status === "pending"
  );

  const { isOpen, openModal, closeModal, selectedId } = useModal();
  const { isSecondModalOpen, closeSecondModal, openSecondModal } =
    useSecondModal();

  const selectedTrainer = pendingTrainers.find(
    (trainer) => trainer._id === selectedId
  );

  const axiosSecure = useAxiosSecure();
  const handleTrainerAccept = (selectedTrainer) => {
    axiosSecure
      .patch(`/trainerInfoByEmail/${selectedTrainer.email}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${selectedTrainer.name} is a Trainer Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        closeModal();
        refresh();
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
        <div className="w-1/3">
          <li className="text-xl font-bold">Status</li>
        </div>
        <div className="w-1/3 text-right">
          <li className="text-xl font-bold">Info</li>
        </div>
      </div>
      {pendingTrainers.map((trainer) => (
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
          <div className="w-1/3">
            <p>{trainer.status}</p>
          </div>
          <div className="w-1/3 text-right">
            <button
              className="bg-rose-500/70 px-3 py-1 rounded-sm"
              onClick={() => openModal(trainer._id)}
            >
              View details
            </button>

            {isOpen && selectedTrainer && (
              <Modal isOpen={isOpen} onClose={closeModal}>
                <div className="flex flex-col gap-5 p-8 h-screen overflow-y-auto">
                  <div className="w-full flex justify-between">
                    <div>
                      <h1 className="text-3xl font-semibold font-mono">
                        Here are the details of the Applicant
                      </h1>
                      <h2>{selectedTrainer.name}</h2>
                    </div>

                    <div onClick={closeModal} className="cursor-pointer">
                      <img
                        className="w-14"
                        src="https://i.ibb.co/VBYcVNK/cross-1.png"
                        alt="close icon"
                      />
                    </div>
                  </div>

                  {/* Applicants details */}

                  <div className="flex gap-5 items-start flex-col w-full my-10">
                    <div className="flex gap-y-5 flex-col flex-[0.7] w-[50vw]">
                      <div className="flex items-center gap-3">
                        <img
                          className="w-12"
                          src="https://i.ibb.co/58MQQnZ/resume.png"
                          alt="details icon"
                        />

                        <h1 className="text-3xl font-bold underline underline-offset-4 font-mono">
                          Details of {selectedTrainer.name}
                        </h1>
                      </div>
                      <img
                        src={selectedTrainer.profileImage}
                        className="h-66 object-cover w-full rounded-tl-3xl rounded-br-3xl"
                        alt="Trainer's photo"
                      />
                      <p className="font-serif text-3xl font-semibold text-red-800">
                        {selectedTrainer.name}
                      </p>
                      <div className="w-full flex justify-between font-semibold">
                        <div className="flex gap-2 items-center">
                          <img
                            className="w-6 h-6"
                            src="https://i.ibb.co/zV1zqDY/user-experience.png"
                            alt=""
                          />

                          <p className="text-xl font-bold">
                            {`${selectedTrainer.experience} ${
                              parseInt(selectedTrainer.experience, 10) > 1
                                ? "Years"
                                : "Year"
                            }`}{" "}
                            of experiences
                          </p>
                        </div>
                        <div className="flex gap-3 flex-col items-center">
                          <img
                            className="w-6 h-6 items-center"
                            src="https://i.ibb.co/Z881kdx/best-customer-experience.png"
                            alt=""
                          />

                          <div className="flex gap-3 flex-col">
                            {selectedTrainer.selectedExpertise.map(
                              (expertise) => {
                                return (
                                  <span
                                    key={expertise.value}
                                    className="bg-black px-2 py-1 rounded-sm font-bold text-white"
                                  >
                                    {expertise.value}
                                  </span>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </div>
                      <p className="text-blue-600 font-bold font-serif">
                        <a
                          className="text-2xl underline underline-offset-2"
                          href={`mailto:${selectedTrainer.email}`}
                        >
                          Email Me!
                        </a>
                      </p>

                      <p className="text-justify font-semibold text-lg">
                        {selectedTrainer.details}
                      </p>
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
                        {selectedTrainer.selectedOptions.map((slot) => {
                          return (
                            <p
                              key={slot.value}
                              className="bg-cyan-300 text-xl px-3 py-2 rounded-sm text-center"
                            >
                              {slot.label}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 min-w-fit text-lg">
                    {/* Clicking on this button will update the status of the status property of the trainerInfo collection in the database */}
                    <button
                      className="px-3 py-1 bg-rose-400 rounded-sm"
                      onClick={() => handleTrainerAccept(selectedTrainer)}
                    >
                      Accept
                    </button>
                    <button
                      className="px-3 py-1 bg-cyan-400 rounded-sm"
                      onClick={openSecondModal}
                    >
                      Reject
                    </button>

                    {isSecondModalOpen && (
                      <Modal
                        isOpen={isSecondModalOpen}
                        onClose={closeSecondModal}
                      >
                        <div className="px-6 py-4 flex flex-col gap-6">
                          <div className="">
                            <h4 className="font-mono text-2xl font-bold">
                              Please write a cause of your rejection:
                            </h4>

                            <p className="text-sm">
                              State the reason behind your rejection. The
                              applicants will be able to see the reason and by
                              fixing or improving, they might re apply to be a
                              trainer.
                            </p>
                          </div>

                          <textarea
                            onChange={(e) =>
                              setRejectionMessage(e.target.value)
                            }
                            rows="4"
                            className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Let the applicant know, why are they getting rejected!"
                          ></textarea>

                          <div className="flex items-center justify-end gap-5">
                            <button className="text-end bg-rose-500/70 max-w-fit px-4 py-2 rounded-sm">
                              Reject
                            </button>
                            <button
                              className="text-end bg-gray-300 max-w-fit px-4 py-2 rounded-sm"
                              onClick={closeSecondModal}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </Modal>
                    )}
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

export default AppliedTrainer;
