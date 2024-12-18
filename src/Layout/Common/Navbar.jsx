import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => {});
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="space-x-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/my-applications">My Applications</NavLink>
          <NavLink to="/add-job">Add-job</NavLink>
          <NavLink to="/my-posted-job">My Posted job</NavLink>
        </div>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <>
            <button onClick={handleSignOut} to="/register" className="btn">
              Logout
            </button>
            <button>
              <img src={user.email} alt="" />
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn">
              Login
            </Link>
            <Link to="/register" className="btn">
              Sing Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
