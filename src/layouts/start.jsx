import React from "react";
import bar from "../assets/bar.jpg";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Section - 55% on md and above */}
      <div className="w-full md:w-[55%] p-6 flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden w-full max-w-[90%]">
          <img
            src={bar}
            alt="Bar Graph"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Right Section - 45% on md and above */}
      <div className="w-full md:w-[45%] flex items-center justify-center p-6">
        <div className="flex flex-col items-center  text-center  m-auto w-full max-w-md">
          <img
            src={logo}
            alt="Logo"
            className="w-32 h-16 mb-3 mx-auto md:mx-0"
          />
          <h1 className="text-4xl md:text-6xl font-bold items-center m-auto text-gray-900 mb-2">
            TaskMaster
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 items-center m-auto  ">
            Your Productivity Hub
          </p>
          <button className="bg-orange-400 hover:bg-orange-600 items-center m-auto text-white font-medium px-6 py-2 rounded-full transition mx-auto md:mx-0">
            <Link to="/dashboard"> Start Now </Link>
           
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
