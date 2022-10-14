import React from "react";
import "../index.css";

const Home = () => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h1 className='text-9xl py-5'>OrchidFrenzy</h1>
      </div>
    </div>
  );
};

export default Home;
