import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between bg-white p-4 shadow">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-600">
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } md:block w-full md:w-64 bg-white shadow-md p-6 flex flex-col justify-between fixed md:relative top-0 left-0 z-50 h-full md:h-auto`}
      >
        <div>
          <h1 className="text-2xl font-bold mb-8 hidden md:block">
            <img src={logo} alt="Logo" className="h-20 w-auto" />
          </h1>
          <nav className="space-y-4">
            <div className="text-sm font-medium text-gray-500">Main</div>
            <ul className="space-y-2">
              <li className="text-orange-500 font-semibold">Dashboard</li>
              <li className="hover:text-orange-500 cursor-pointer">Tasks</li>
              <li className="hover:text-orange-500 cursor-pointer">Routines</li>
              <li className="hover:text-orange-500 cursor-pointer">Teamwork</li>
              <li className="hover:text-orange-500 cursor-pointer">Goals</li>
            </ul>

            <div className="text-sm font-medium text-gray-500 mt-6">Personal</div>
            <ul className="space-y-2">
              <li className="hover:text-orange-500 cursor-pointer">Productivity</li>
              <li className="hover:text-orange-500 cursor-pointer">Security</li>
              <li className="hover:text-orange-500 cursor-pointer">Privacy</li>
              <li className="hover:text-orange-500 cursor-pointer">Preferences</li>
            </ul>
          </nav>
        </div>
        <div className="space-y-2 mt-6 md:mt-0">
          <div className="bg-orange-100 p-3 rounded-lg flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-500 rounded-full"></div>
            <div>
              <p className="text-sm font-medium">Alex Smith</p>
              <p className="text-xs text-gray-500">alexsmith@email.co</p>
            </div>
          </div>
          <button className="text-sm text-gray-500 hover:text-red-500">Log out</button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col mt-16 md:mt-0">
        {/* Topbar */}
        <header className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 bg-white shadow">
          <input
            type="text"
            placeholder="Search tasks"
            className="border rounded-lg px-4 py-2 w-full md:w-1/2 focus:outline-none"
          />
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full md:w-auto">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg w-full md:w-auto">Add Task</button>
            <button className="bg-white border px-4 py-2 rounded-lg w-full md:w-auto">Start</button>
          </div>
        </header>

        {/* Dashboard Widgets */}
        <main className="p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {/* Calendar */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="font-semibold text-lg mb-4">October 2023</h2>
            <div className="grid grid-cols-7 gap-2 text-center text-sm">
              {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
                <div key={day} className="font-medium text-gray-500">{day}</div>
              ))}
              {[...Array(35)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 font-medium"
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* My Tasks */}
                        <div className="bg-white p-4 rounded-xl shadow">
                                        <Link to = "/mytask">

            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg">My Tasks (07)</h2>
              <button className="text-gray-400">⋮</button>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between"><span>Complete weekly goals</span><span className="text-gray-500">Upcoming</span></li>
              <li className="flex justify-between"><span>Fitness routine</span><span className="text-orange-500">Today</span></li>
              <li className="flex justify-between"><span>Game night planning</span><span className="text-gray-500">Tomorrow</span></li>
              <li className="flex justify-between"><span>Study session</span><span className="text-gray-500">Upcoming</span></li>
              <li className="flex justify-between"><span>Organize study schedule</span><span className="text-gray-500">This month</span></li>
            </ul>
            </Link>
          </div>

          {/* New Task Alerts */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="font-semibold text-lg mb-4">New task alerts</h2>
            <div className="space-y-4 text-sm">
              <div className="bg-orange-50 p-3 rounded-xl">
                <h4 className="font-medium">Fitness goals</h4>
                <p className="text-gray-500">Check your daily tasks attached…</p>
              </div>
              <div className="bg-orange-50 p-3 rounded-xl">
                <h4 className="font-medium">Study sessions</h4>
                <p className="text-gray-500">I’ve set reminders. Let’s review them…</p>
              </div>
              <button className="bg-orange-500 text-white w-full py-2 rounded-lg">Create</button>
            </div>
          </div>

          {/* My Routines */}
          <div className="bg-white p-4 rounded-xl shadow col-span-1">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg">My routines</h2>
              <button className="text-gray-400">⋮</button>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between items-center"><span>Productivity</span><div className="w-6 h-6 rounded-full bg-orange-500"></div></li>
              <li className="flex justify-between items-center"><span>Workout buddies</span><div className="flex -space-x-1">
                <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                <div className="w-6 h-6 rounded-full bg-gray-400"></div>
              </div></li>
              <li className="flex justify-between items-center"><span>Gaming</span><div className="w-6 h-6 rounded-full bg-gray-300"></div></li>
              <li className="flex justify-between items-center"><span>Task planning</span><div className="w-6 h-6 rounded-full bg-orange-300"></div></li>
            </ul>
            <button className="mt-4 bg-orange-500 text-white w-full py-2 rounded-lg">Add more</button>
          </div>

          {/* Dashboard Stats */}
          <div className="bg-white p-4 rounded-xl shadow col-span-1">
            <h2 className="font-semibold text-lg mb-4">My dashboard</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between"><span>Track my progress</span><span className="text-orange-500 font-medium">2h 15m</span></li>
              <li className="flex justify-between"><span>Design layout tasks</span><span className="text-gray-500">45m 30s</span></li>
              <li className="flex justify-between"><span>Routine overview</span><span className="text-gray-500">1h 05m 22s</span></li>
              <li className="flex justify-between"><span>Set reminders</span><span className="text-gray-500">30m 15s</span></li>
              <li className="flex justify-between"><span>Daily planner</span><span className="text-gray-500">10h 45m 30s</span></li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
