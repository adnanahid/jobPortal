import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";

import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import JobDetail from "../Pages/JobDetails/JobDetail";
import PrivateRoute from "./PrivateRoute";
import ApplyJob from "../Pages/ApplyJob/ApplyJob";
import MyApplication from "../Pages/MyApplication/MyApplication";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJob from "../Pages/MyPostedJob/MyPostedJob";
import ViewApplicant from "../Pages/ViewApplicant/ViewApplicant";

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
        path: "/view-applicant/:job_id",
        loader: ({ params }) => fetch(`http://localhost:3000/job-applicants-for/job/${params.job_id}`),
        element: (
          <PrivateRoute>
            <ViewApplicant></ViewApplicant>
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
        path: "/add-job",
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-applications/",
        element: (
          <PrivateRoute>
            <MyApplication></MyApplication>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-posted-job/",
        element: (
          <PrivateRoute>
            <MyPostedJob></MyPostedJob>
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
