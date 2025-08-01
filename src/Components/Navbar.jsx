import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow px-6 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
          
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-orange-500 cursor-pointer">
            <Link to="/dashboard"> Dashboard</Link>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">Tasks</li>
          <li className="hover:text-orange-500 cursor-pointer">Routines</li>
          <li className="hover:text-orange-500 cursor-pointer">Goals</li>
        </ul>

        {/* Right Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
            Add Task
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
            Start
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-600 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <ul className="flex flex-col space-y-2 text-gray-700 font-medium">
            <li className="hover:text-orange-500 cursor-pointer">Dashboard</li>
            <li className="hover:text-orange-500 cursor-pointer">Tasks</li>
            <li className="hover:text-orange-500 cursor-pointer">Routines</li>
            <li className="hover:text-orange-500 cursor-pointer">Goals</li>
          </ul>
          <div className="flex flex-col gap-2">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
              Add Task
            </button>
            <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
              Start
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
