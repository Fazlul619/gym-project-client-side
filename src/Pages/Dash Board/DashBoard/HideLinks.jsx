import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

export const OnlyForAdmin = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user.role === "admin") {
    return children;
  }

  return null;
};

export const OnlyForTrainer = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user.role === "trainer") {
    return children;
  }

  return null;
};

export const OnlyForMember = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user.role === "member") {
    return children;
  }

  return null;
};
