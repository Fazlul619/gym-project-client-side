import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllClassesPage from "../Pages/All Classes Page/AllClassesPage";
import AllTrainerPage from "../Pages/All Trainer Page/AllTrainerPage";
import ForumsPage from "../Pages/Forums Page/ForumsPage";
import Login from "../Pages/Login Page/Login";
import Register from "../Pages/Register Page/Register";

import TrainerBookedPage from "../Pages/Trainer Booked Page/TrainerBookedPage";
import PrivateRoute from "./PrivateRoute";
import BeATrainerPage from "../Pages/Be A Trainer Page/BeATrainerPage";

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
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/trainerBookedPage",
        element: (
          <PrivateRoute>
            <TrainerBookedPage></TrainerBookedPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/beATrainerPage",
        element: (
          <PrivateRoute>
            <BeATrainerPage></BeATrainerPage>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
