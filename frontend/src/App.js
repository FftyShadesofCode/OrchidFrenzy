import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Login from './components/Login/Login'
import Home from './container/Home'

import './App.css';

const App = () => {
    const [token, setToken] = useState()

    if(!token) {
        return <Login setToken={setToken} />
    }
  return(
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='/*' element={<Home />} />
      </Routes>
  )
}

export default App;
