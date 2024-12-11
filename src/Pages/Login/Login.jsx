import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import LoginAnimation from "../../assets/LoginAnimation.json";
import AuthContext from "../../Context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { user, setUser, loading, setLoading, signInUser } =
    useContext(AuthContext);
  const location = useLocation();
  const from = location.state || "/"
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    // Access form field values using the `name` attributes
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        //toast
        toast.success("🦄 Wow so easy!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // You can clear the form or redirect here
        form.reset();
        navigate(from);
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
          <Lottie animationData={LoginAnimation} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <h2 className="text-3xl font-bold text-center">Login</h2>
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
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}
            <div className="form-control mt-6">
              <button type="submit" className="btn text-white bg-[#4a6cd1]">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
