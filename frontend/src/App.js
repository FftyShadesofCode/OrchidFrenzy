import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import PrivateRoutes from './utils/PrivateRoutes'
import Navbar from './components/navigation/navbar'
import Login from './components/Login/Login'
import Register from './components/Login/Register'
import Home from './container/Home'

import './App.css'

const App = () => {
    const [isSignedIn, setIsSignedIn] = useState(false)

  return(
      <div>
          {isSignedIn && <Navbar />}
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route element={<PrivateRoutes />} >
                <Route element={<Home />} path='/' exact />
                <Route element={<Register />} path='/register' />
            </Route>
          </Routes>
      </div>
  )
}

export default App
