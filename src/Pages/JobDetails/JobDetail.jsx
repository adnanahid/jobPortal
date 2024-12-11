import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetail = () => {
  const data = useLoaderData();

  // Helper function to format currency
  const formatCurrency = (value, currency) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(value);

  // Helper function to format date
  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  // Handle case where data is undefined or null
  if (!data) {
    return <p>Loading job details...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto rounded overflow-hidden shadow-lg p-4 my-12">
      <div className="flex items-center mb-4">
        <img
          src="https://i.ibb.co/MhsV6wz/microsoft.png"
          alt="Company Logo"
          className="w-10 h-10 mr-3"
        />
        <div>
          <h2 className="text-xl font-bold">{data.company}</h2>
          <p className="text-gray-600">{data.location}</p>
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{data.category}</h3>
      <div className="flex items-center text-gray-600 mb-4">
        <span className="mr-2">{data.jobType}</span>
        <span>•</span>
        <span className="ml-2">
          {data.department || "Department not specified"}
        </span>
      </div>
      <p className="text-gray-700 mb-4">
        {data.description || "No job description provided."}
      </p>
      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-1">Requirements:</h4>
        <ul className="list-disc list-inside text-gray-700">
          {data.requirements && data.requirements.length > 0 ? (
            data.requirements.map((requirement, idx) => (
              <li key={idx}>{requirement}</li>
            ))
          ) : (
            <p>No specific requirements provided.</p>
          )}
        </ul>
      </div>
      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-1">Responsibilities:</h4>
        <ul className="list-disc list-inside text-gray-700">
          {data.responsibilities && data.responsibilities.length > 0 ? (
            data.responsibilities.map((response, idx) => (
              <li key={idx}>{response}</li>
            ))
          ) : (
            <p>No responsibilities listed.</p>
          )}
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-2xl font-bold text-blue-600">
            {formatCurrency(data.salaryRange.max, data.salaryRange.currency)} -{" "}
            {formatCurrency(data.salaryRange.min, data.salaryRange.currency)}
          </span>
          <span className="text-gray-600">/Month</span>
        </div>
      </div>
      <button
        className="w-full my-3 bg-blue-500 text-white font-bold py-2 px-4 rounded"
        aria-label="Apply for this job"
      >
        Apply Now
      </button>
      <p className="text-gray-600 mt-4">
        Application Deadline:{" "}
        {data.applicationDeadline
          ? formatDate(data.applicationDeadline)
          : "Not specified"}
      </p>
      <p className="text-gray-600">
        Contact HR: {data.hr_name || "Not available"} (
        {data.hr_email || "Not available"})
      </p>
    </div>
  );
};

export default JobDetail;
