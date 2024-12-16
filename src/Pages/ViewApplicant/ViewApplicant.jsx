import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewApplicant = () => {
  const data = useLoaderData(); // Fetch data passed by the loader
  const handleStatusUpdate = (e, id) => {
    console.log(e.target.value, id);
    const data = {
      status: e.target.value,
    };
    fetch(`http://localhost:3000/job-applicants/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="pt-24 px-4 md:px-8 max-w-screen-xl mx-auto min-h-screen">
      <h2 className="text-3xl font-bold md:text-4xl text-center mb-6">
        Applicants for this Job
      </h2>

      {data.length === 0 ? (
        <div className="text-center my-12">
          <h3 className="text-2xl font-semibold text-gray-600">
            No applicants found for this job.
          </h3>
          <p className="text-gray-500">
            This job has not received any applications yet.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border border-gray-300">#</th>
                <th className="px-4 py-2 border border-gray-300">Name</th>
                <th className="px-4 py-2 border border-gray-300">Email</th>
                <th className="px-4 py-2 border border-gray-300">Resume</th>
                <th className="px-4 py-2 border border-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((applicant, index) => (
                <tr key={applicant._id} className="text-center">
                  <td className="px-4 py-2 border border-gray-300">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {applicant.applicant_name || "N/A"}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {applicant.applicant_email}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {applicant.resume ? (
                      <a
                        href={applicant.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        View Resume
                      </a>
                    ) : (
                      "No Resume"
                    )}
                  </td>
                  <td>
                    <select
                      onChange={(e) => handleStatusUpdate(e, applicant._id)}
                      defaultValue={applicant.status || "Change Status"}
                      className="select select-bordered select-xs w-7/12 max-w-xs"
                    >
                      <option disabled>Change Status</option>
                      <option>Under Review</option>
                      <option>Set Interview</option>
                      <option>Hired</option>
                      <option>Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewApplicant;
