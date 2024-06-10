import { useState, useCallback } from "react";

const useSecondModal = () => {
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const openSecondModal = useCallback(() => {
    setIsSecondModalOpen(true);
  }, []);

  const closeSecondModal = useCallback(() => {
    setIsSecondModalOpen(false);
  }, []);

  return { isSecondModalOpen, openSecondModal, closeSecondModal };
};

export default useSecondModal;
