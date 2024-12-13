import React, { useContext, useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";
import AuthContext from "../../Context/AuthContext";

const HotJobs = () => {
  const { loading } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">Jobs of the day</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-12">
        {jobs.map((job) => (
          <HotJobCard key={job._id} job={job}></HotJobCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
