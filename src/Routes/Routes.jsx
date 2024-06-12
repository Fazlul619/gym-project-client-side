import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllClassesPage from "../Pages/All Classes Page/AllClassesPage";
import AllTrainerPage from "../Pages/All Trainer Page/AllTrainerPage";
import ForumsPage from "../Pages/Forums Page/ForumsPage";
import Login from "../Pages/Login Page/Login";
import Register from "../Pages/Register Page/Register";

import PrivateRoute from "./PrivateRoute";
import BeATrainerPage from "../Pages/Be A Trainer Page/BeATrainerPage";
import TrainerDetailsPage from "../Pages/Trainer Details Page/TrainerDetailsPage";
import DashBoard from "../Pages/Dash Board/DashBoard/DashBoard";
import AllNewsletterSubscribers from "../Pages/Dash Board/All Newsletter subscribers/AllNewsletterSubscribers";
import AllTrainers from "../Pages/Dash Board/All Trainers/AllTrainers";
import AppliedTrainer from "../Pages/Dash Board/Applied Trainer/AppliedTrainer";
import Balance from "../Pages/Dash Board/Balance/Balance";
import AddNewClass from "../Pages/Dash Board/Add new Class/AddNewClass";
import ManageSlots from "../Pages/Dash Board/Manage Slots/ManageSlots";
import AddNewSlot from "../Pages/Dash Board/Add New slot/AddNewSlot";
import AddNewForum from "../Pages/Dash Board/Add New Forum/AddNewForum";
import ActivityLogPage from "../Pages/Dash Board/Activity Log page/ActivityLogPage";
import ProfilePage from "../Pages/Dash Board/Profile Page/ProfilePage";
import BookedTrainer from "../Pages/Dash Board/Booked Trainer/BookedTrainer";
import BookingTrainer from "../Pages/Trainer Details Page/BookingTrainer";
import PaymentPage from "../Pages/Payment Page/PaymentPage";
import ForumDetails from "../Pages/Forum Details/ForumDetails";

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
        path: "/trainerDetailsPage/:id",
        element: <TrainerDetailsPage></TrainerDetailsPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allTrainers/${params.id}`),
      },
      {
        path: "/forumsPage",
        element: <ForumsPage></ForumsPage>,
      },
      {
        path: "/forumDetails/:id",
        element: <ForumDetails></ForumDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allForumPost/${params.id}`),
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
        path: "/bookedTrainerPage",
        element: (
          <PrivateRoute>
            <BookedTrainer></BookedTrainer>
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
      {
        path: "/bookingTrainer/:id/:slot",
        element: (
          <PrivateRoute>
            <BookingTrainer></BookingTrainer>
          </PrivateRoute>
        ),
      },
      {
        path: "/paymentPage/:packageName/:paymentData",
        element: <PaymentPage></PaymentPage>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      // admin routes
      {
        path: "allNewsletterSubscribers",
        element: <AllNewsletterSubscribers></AllNewsletterSubscribers>,
      },

      {
        path: "allTrainers",
        element: <AllTrainers></AllTrainers>,
      },
      {
        path: "appliedTrainer",
        element: <AppliedTrainer></AppliedTrainer>,
      },
      {
        path: "balance",
        element: <Balance></Balance>,
      },
      {
        path: "addNewClass",
        element: <AddNewClass></AddNewClass>,
      },
      // shared route for admin and trainer
      {
        path: "addNewForum",
        element: <AddNewForum></AddNewForum>,
      },
      // Trainer Route
      {
        path: "manageSlots",
        element: <ManageSlots></ManageSlots>,
      },
      {
        path: "addNewSlot",
        element: <AddNewSlot></AddNewSlot>,
      },
      // Member route
      {
        path: "activityLogPage",
        element: <ActivityLogPage></ActivityLogPage>,
      },
      {
        path: "profilePage",
        element: <ProfilePage></ProfilePage>,
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/users/${params.email}`),
      },
      {
        path: "bookedTrainer",
        element: <BookedTrainer></BookedTrainer>,
      },
    ],
  },
]);
