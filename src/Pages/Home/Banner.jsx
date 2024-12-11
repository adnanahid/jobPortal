import React from "react";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <div className="hero bg-base-200 my-24 lg:h-[600px] relative">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="flex-1 flex">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl absolute right-24 top-56"
          />
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl absolute right-96 bottom-48"
          />
        </div>
        <motion.div animate={{ x: -40 }} transition={{duration: 1}} className="flex-1">
          <h1 className="text-5xl font-bold">
            The Easiest Way to Get Your New Job
          </h1>
          <p className="py-6">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>
          <button className="btn btn-primary">Get Started</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
