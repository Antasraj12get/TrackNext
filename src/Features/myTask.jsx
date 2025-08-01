import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const MyTask = () => {
  const [addTask, setAddTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (addTask.trim() === "") return;
    setTasks([...tasks, addTask]);
    setAddTask("");
  };

  const handleDeleteTask = (index) => {
    const updateTask = [...tasks];
    updateTask.splice(index, 1);
    setTasks(updateTask);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-4 md:p-6 flex justify-center items-start">
        <div className="w-full max-w-full bg-white rounded-xl shadow p-4 md:p-6">
          {/* Header */}
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
            My Tasks
          </h1>

          {/* Input Section */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="text"
              onChange={(e) => setAddTask(e.target.value)}
              value={addTask}
              placeholder="Enter your task"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition w-full sm:w-auto"
              onClick={handleAddTask}
            >
              Add Task
            </button>
          </div>

          {/* Task List */}
          {tasks.length === 0 ? (
            <p className="text-gray-500 text-center">No tasks yet. Add one!</p>
          ) : (
            <ul className="space-y-3">
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-3 bg-orange-50 rounded-lg shadow-sm hover:shadow transition"
                >
                  <span className="text-gray-800 break-words w-[80%]">
                    {task}
                  </span>
                  <button
                    className="text-red-500 hover:text-red-700 text-sm font-semibold"
                    onClick={() => handleDeleteTask(index)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default MyTask;
