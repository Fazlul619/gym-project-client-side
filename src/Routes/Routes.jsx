import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllClassesPage from "../Pages/All Classes Page/AllClassesPage";
import AllTrainerPage from "../Pages/All Trainer Page/AllTrainerPage";
import ForumsPage from "../Pages/Forums Page/ForumsPage";
import Login from "../Pages/Login Page/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allClassesPage",
        element: <AllClassesPage></AllClassesPage>,
      },
      {
        path: "/allTrainerPage",
        element: <AllTrainerPage></AllTrainerPage>,
      },
      {
        path: "/forumsPage",
        element: <ForumsPage></ForumsPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
