import React from 'react'
import "./App.css"
import Start from './layouts/start'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './layouts/dashBoard';


const App = () => {

  return (
<>
<Routes>
  <Route path='/dashboard' element = {<Dashboard/>}/>
</Routes>
<Start/>
</>
  )
}

export default App