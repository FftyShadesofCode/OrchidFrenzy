import React from "react";

const Navbar = () => {
  return (
    <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-black'>
        <a href='/'>
          <h1 className='font-bold text-4xl py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-teal-400 to-purple-900'>
            OrchidFrenzy
          </h1>
        </a>
        <ul className='hidden sm:flex'>
          <li className='p-4'>
            <a href='/'>Home</a>
          </li>
          <li className='p-4'>
            <a href='/#gallery'>Gallery</a>
          </li>
          <li className='p-4'>
            <a href='/work'>Dashboard</a>
          </li>
          <li className='p-4'>
            <a href='/work'>Meetings</a>
          </li>
          <li className='p-4'>
            <a href='/work'>Events</a>
          </li>
          <li className='p-4'>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
