import React from "react";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;
  return (
    //
    <div className="max-w-sm h-[450px] flex flex-col rounded overflow-hidden shadow-lg p-4 bg-white">
      <div className="flex items-center mb-4">
        <img
          src={company_logo}
          alt="LinkedIn Logo"
          className="w-10 h-10 mr-3"
        />
        <div>
          <h2 className="text-xl font-bold">{company}</h2>
          <p className="text-gray-600">{location}</p>
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="flex items-center text-gray-600 mb-4">
        <span className="mr-2">Fulltime</span>
        <span>•</span>
        <span className="ml-2">4 minutes ago</span>
      </div>
      <p className="text-gray-700 mb-4 flex-grow">{description}</p>
      <div className="flex flex-wrap mb-4 ">
        {requirements.map((req) => (
          <span key={req._id} className="bg-gray-200 text-gray-800 text-sm font-semibold mr-2 px-2.5 py-0.5 mt-1 rounded">
            {req}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-blue-600">$500</span>
        <span className="text-gray-600">/Hour</span>
        <Link
          to={`/jobDetails/${_id}`}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default HotJobCard;
