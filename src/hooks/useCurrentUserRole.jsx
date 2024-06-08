import { useEffect, useState } from "react";

const useCurrentUserRole = (user, users) => {
  const [currentUserRole, setCurrentUserRole] = useState(null);
  useEffect(() => {
    if (user && users) {
      const allUsers = users.filter(
        (currentUser) => currentUser.email === user.email
      );
      if (allUsers.length > 0) {
        const [role] = allUsers.map((user) => user.role);
        setCurrentUserRole(role);
      }
    }
  }, [user, users]);

  return currentUserRole;
};

export default useCurrentUserRole;
