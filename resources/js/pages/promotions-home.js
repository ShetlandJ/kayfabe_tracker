import React, { useState, useEffect } from 'react';
// import GuestN/av from '../components/guest-nav';
import Navbar from '../components/navbar';
import PromotionCard from '../components/promotion-card';
import { getPromotions } from '../api/promotions';

function PromotionsHome () {
  const [loading, setLoading] = useState(true);
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    getPromotions()
      .then(response => {
        setPromotions(response);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="mx-auto w-2/3 pt-4">
        {promotions.length > 0 && promotions.map((promotion) => (
          <PromotionCard key={promotion.id} promotion={promotion} />
        ))}
      </div>

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
