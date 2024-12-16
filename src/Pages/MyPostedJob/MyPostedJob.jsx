import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import { Link } from "react-router-dom";

const MyPostedJob = () => {
  const { user } = useContext(AuthContext); // Ensure 'user' is defined and has an 'email' property
  const [jobs, setJobs] = useState([]); // Initialize as an empty array to prevent errors

  useEffect(() => {
    // Ensure user.email exists before making the API call
    if (user?.email) {
      fetch(`http://localhost:3000/jobs?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setJobs(data);
        })
        .catch((err) => {
          console.error("Failed to fetch jobs:", err);
        });
    }
  }, [user?.email]); // Only re-run if user.email changes

  return (
    <div>
      <h2 className="text-3xl">My Posted Jobs: {jobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th></th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>Application Count</th>
              <th>Applicants</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr className="text-center">
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>{job.applicationCount}</td>
                <td>
                  <Link to={`/view-applicant/${job._id}`}>
                    <button className="btn">View Applicant</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJob;
