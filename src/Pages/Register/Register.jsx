import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import AuthContext from "../../Context/AuthContext";
// import moduleName from '../../assets/LoginAnimation.json';

const Register = () => {
  const { user, loading, setLoading, createUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

  //password validation
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Access form field values using the `name` attributes
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Validate password
    if (!validatePassword(password)) {
      setErrorMessage(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 6 characters long."
      );
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // You can clear the form or redirect here
        form.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };

  return (
    <div className="hero max-w-6xl mx-auto min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8">
        <div className="text-center lg:text-left md:w-96 lg:w-[450px]">
          {/* <Lottie animationData={moduleName} /> */}
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <h2 className="text-3xl font-bold text-center">
              Create Your Account
            </h2>
            <div className="form-control">
              <label htmlFor="name" className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
                required
                aria-label="Name"
              />
            </div>
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
                aria-label="Email"
              />
            </div>
            <div className="form-control">
              <label htmlFor="password" className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Create a strong password"
                className="input input-bordered"
                required
                aria-label="Password"
              />
              <span className="text-xs text-gray-500 mt-1">
                Must contain at least one uppercase, one lowercase, one number,
                and be at least 6 characters long.
              </span>
            </div>
            <div className="form-control">
              <label htmlFor="confirmPassword" className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                className="input input-bordered"
                required
                aria-label="Confirm Password"
              />
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}
            <div className="form-control mt-6">
              <button type="submit" className="btn text-white bg-[#904ad4]">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
