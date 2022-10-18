import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Topnav from './components/navigation/topnav'
// import Login from './components/Login/Login'
// import Register from './components/Login/Register'
import Home from './pages/Home'

import './App.css'

const App = () => {

  return(
      <div className={`bg-black w-full w-full`}>
          <Topnav />
          <Routes>
            <Route element={<Home />} path='/' exact />
            {/*<Route path='/login' element={<Login />} />*/}
            {/*<Route element={<Register />} path='/register' />*/}
          </Routes>
      </div>
  )
}

export default App
