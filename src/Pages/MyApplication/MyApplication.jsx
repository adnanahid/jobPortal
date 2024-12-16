import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import { FaPenNib } from "react-icons/fa";

import { FaRegTrashAlt } from "react-icons/fa";
const MyApplication = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/my-applications?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [user.email]);

  console.log(jobs);
  return (
    <div className="max-w-5xl mx-auto my-24">
      <h2 className="text-3xl">My Applications: {jobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>index</th>
              <th>Name</th>
              <th>Location</th>
              <th>Update</th>
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jobs.map((job, index) => (
              <tr key={job._id} className="text-center">
                <th>{index + 1}</th>
                <td className="font-bold">{job.title}</td>
                <td>{job.location}</td>
                <td><button className="btn btn-ghost"><FaPenNib /></button></td>
                <th>
                  <button className="btn btn-ghost"><FaRegTrashAlt /></button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
