import React from 'react';
// import GuestN/av from '../components/guest-nav';
import Navbar from '../components/navbar';

function PromotionsHome () {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-indigo text-2xl p-2 font-thin uppercase"> Start crafting your appppf now!</h1>
        <div className="flex items-center">
          <img src='/images/icons/laravel.svg' className="h-24" />
          <span className="text-3xl font-thin ml-8">&#43;</span>
          <img src='/images/icons/react.svg' className="h-32" />
        </div>
      </div>
    </div>
  );
};

export default PromotionsHome;
