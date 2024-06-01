import { Outlet } from "react-router-dom";
import FooterPage from "../Pages/Shared/Footer/FooterPage";
import NavBar from "../Pages/Shared/Nav Bar/NavBar";
const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <FooterPage></FooterPage>
    </div>
  );
};

export default Main;
