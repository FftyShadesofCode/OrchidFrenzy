import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./components/navigation/Navbar";
import Login from "./components/Login/Login";
import EmailLogin from "./components/Login/EmailLogin";
import Home from "./container/Home";

import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/emaillogin' element={<EmailLogin />} />
        {/* <Route path='/' element={<Home />} /> */}
      </Routes>
    </div>
  );
};

export default App;
