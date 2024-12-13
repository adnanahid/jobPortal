import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import swal from "sweetalert2";

const ApplyJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext) || {};
  const [isLoading, setIsLoading] = useState(false);

  const submitJobApplication = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const jobApplication = {
      job_id: id,
      applicant_email: user?.email,
      linkedIn,
      github,
      resume,
    };

    fetch("http://localhost:3000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          //   swal.fire({
          //     position: "top-end",
          //     icon: "success",
          //     title: "Your work has been saved",
          //     showConfirmButton: false,
          //     timer: 1500,
          //   });
          alert("successful");
          navigate("/");
        }
      });
  };

  return (
    <div className="card bg-base-100 w-[500px] mx-auto my-12 shadow-2xl">
      <h1 className="text-4xl font-bold text-center">Jobs Form</h1>
      <form onSubmit={submitJobApplication} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn URL</span>
          </label>
          <input
            type="url"
            name="linkedIn"
            placeholder="LinkedIn URL"
            className="input input-bordered"
            required
            pattern="https://.*"
            title="Please enter a valid LinkedIn URL"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github URL</span>
          </label>
          <input
            type="url"
            name="github"
            placeholder="Github URL"
            className="input input-bordered"
            required
            pattern="https://.*"
            title="Please enter a valid GitHub URL"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume URL</span>
          </label>
          <input
            type="url"
            name="resume"
            placeholder="Resume URL"
            className="input input-bordered"
            required
            pattern="https://.*"
            title="Please enter a valid Resume URL"
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyJob;
