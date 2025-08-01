import React from 'react';
import "./App.css";
import Start from './layouts/start';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './layouts/dashBoard';
import MyTask from './Features/myTask';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/mytask' element={<MyTask/>} />

      </Routes>
    </>
  );
}

export default App;
