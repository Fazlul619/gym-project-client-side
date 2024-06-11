import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useUser from "../../../hooks/useUser";
import useCurrentUserRole from "../../../hooks/useCurrentUserRole";

export const OnlyForAdmin = ({ children }) => {
  //currently logged in user
  const { user } = useContext(AuthContext);

  //users with role
  const [users] = useUser();

  //getting the role of the current user
  const currentUserRole = useCurrentUserRole(user, users);

  if (currentUserRole === "admin") {
    return children;
  }

  return null;
};

export const OnlyForTrainer = ({ children }) => {
  //currently logged in user
  const { user } = useContext(AuthContext);

  //users with role
  const [users] = useUser();

  //getting the role of the current user
  const currentUserRole = useCurrentUserRole(user, users);

  if (currentUserRole === "trainer") {
    return children;
  }

  return null;
};

export const OnlyForMember = ({ children }) => {
  //currently logged in user
  const { user } = useContext(AuthContext);

  //users with role
  const [users] = useUser();

  //getting the role of the current user
  const currentUserRole = useCurrentUserRole(user, users);

  if (currentUserRole === "member") {
    return children;
  }

  return null;
};

export const OnlyForAdminAndTrainer = ({ children }) => {
  //currently logged in user
  const { user } = useContext(AuthContext);

  //users with role
  const [users] = useUser();

  //getting the role of the current user
  const currentUserRole = useCurrentUserRole(user, users);

  if ((currentUserRole === "admin") | "trainer") {
    return children;
  }

  return null;
};
