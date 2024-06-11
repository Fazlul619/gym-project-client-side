import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../providers/AuthProvider";
import useUser from "../../hooks/useUser";
import useForum from "../../hooks/useForum";

const ForumsPage = () => {
  const [allForums] = useForum();
  const adminBadge = "https://i.ibb.co/ydgYsp2/admin.png";
  const trainerBadge = "https://i.ibb.co/S0SkDsQ/trainer.png";
  const [users] = useUser();

  // console.log(user);
  // console.log(users);

  // const currentUser = users.filter((u) => u.email === user?.email);
  // const [currentUserRole] = currentUser.map((details) => details.role);

  // console.log(currentUserRole);

  return (
    <div>
      <Helmet>
        <title>Fitness Flow | Forums Page</title>
      </Helmet>
      <h1>Community posts!</h1>

      {allForums.map((forum) => {
        return (
          <div>
            <h1>{forum.title}</h1>
          </div>
        );
      })}
      <div></div>
    </div>
  );
};

export default ForumsPage;
