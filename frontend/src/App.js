import React from "react";
import { Routes, Route } from "react-router-dom";

import Topnav from "./components/navigation/topnav";
import Sidenav from "./components/navigation/sidenav";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Home from "./pages/Home";
import Messaging from './pages/Messaging/messaging';
import Inbox from './pages/Messaging/Inbox';
import Favorites from "./pages/Messaging/Favorites";
import Sent from './pages/Messaging/Sent';
import Friendz from './pages/Friendz/friendz';
import MyOrchids from './pages/MyOrchids/MyOrchids';
import Forums from './pages/Forums/forums';

import "./App.css";

const App = () => {
  return (
    <div>
      <Topnav />
      <Sidenav />
      <Routes>
        <Route element={<Home />} path='/' exact />
        <Route path='/login' element={<Login />} />
        <Route element={<Register />} path='/register' />

        // Sidebar Routes
          <Route path='/messaging' element={<Messaging />} />
          <Route path='/messaging/inbox' element={<Inbox />} />
          <Route path='/messaging/sent' element={<Sent />} />
          <Route path='/messaging/favorites' element={<Favorites />} />
          <Route path='/friendz' element={<Friendz />} />
          <Route path='/my-orchids' element={<MyOrchids />} />
          <Route path='/forums' element={<Forums />} />
      </Routes>
    </div>
  );
};

export default App;
