import { useState, useCallback } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const openModal = useCallback((id) => {
    setSelectedId(id);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedId(null);
    setIsOpen(false);
  }, []);

  return { isOpen, openModal, closeModal, selectedId };
};

export default useModal;
