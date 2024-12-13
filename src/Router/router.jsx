import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";

import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import JobDetail from "../Pages/JobDetails/JobDetail";
import PrivateRoute from "./PrivateRoute";
import ApplyJob from "../Pages/ApplyJob/ApplyJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobDetails/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/job/${params.id}`),
        element: (
          <PrivateRoute>
            <JobDetail></JobDetail>
          </PrivateRoute>
        ),
      },
      {
        path: "/apply-job/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/job/${params.id}`),
        element: (
          <PrivateRoute>
            <ApplyJob></ApplyJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
