import React from "react";
import { motion } from "motion/react";
import team1 from "../../assets/team1.webp";
import team2 from "../../assets/team2.webp";

const Banner = () => {
  return (
    <div className="bg-base-200 my-12 lg:h-[500px] bgBanner">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="w-1/2 ">
          <motion.img
            src={team1}
            animate={{ y: [50, 100, 50] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl"
          />
          <motion.img
            src={team2}
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10, delay: 5, repeat: Infinity }}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl"
          />
        </div>
        <motion.div
          animate={{ x: -40 }}
          transition={{ duration: 1 }}
          className="w-1/2 pl-28 pt-24"
        >
          <h1 className="text-5xl font-bold">
            The Easiest Way <br /> to Get Your
            <br />
            New Job
          </h1>
          <p className="py-6">
            Each month, more than 3 million job seekers turn to website <br /> in their search for work, making <br /> over 140,000 applications every single day
          </p>
          <button className="btn btn-primary">Get Started</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
