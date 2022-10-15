import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Navbar from './components/navigation/navbar'
import Login from './components/Login/Login'
import Home from './container/Home'

import './App.css';

const App = () => {
  return(
      <div>
          <Navbar />
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
          </Routes>
      </div>
  )
}

export default App;
