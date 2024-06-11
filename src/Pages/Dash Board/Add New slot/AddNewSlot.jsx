import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAllTrainer from "../../../hooks/useAllTrainer";

const AddNewSlot = () => {
  const { user } = useContext(AuthContext);
  const [allTrainers] = useAllTrainer();

  const currentTrainer = allTrainers.filter(
    (trainer) => trainer.email === user.email
  );

  // const [currentTrainerSlots] = currentTrainer.map(
  //   (trainerInfo) => trainerInfo.selectedOptions
  // );

  return (
    <div>
      {/* {currentTrainerSlots.map((slot) => {
        return <h1 key={slot.value}>{slot.label}</h1>;
      })} */}
    </div>
  );
};

export default AddNewSlot;
