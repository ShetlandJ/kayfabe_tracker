import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { getWrestlerHistory } from '../api/wrestlers';
import { useRouteMatch } from 'react-router-dom';
import WrestlerProfileCard from '../components/wrestler-card';

function PromotionWrestlers () {
  const [loading, setLoading] = useState(true);
  const [promotion, setPromotion] = useState([]);
  const [wrestler, setWrestler] = useState([]);
  const alias = useRouteMatch().params.alias;
  const slug = useRouteMatch().params.slug;

  useEffect(() => {
    getWrestlerHistory(alias, slug)
      .then(({ promotion, wrestler }) => {
        setPromotion(promotion);
        setWrestler(wrestler);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div>
        {!loading && (
          <WrestlerProfileCard wrestler={wrestler} />
        )}
      </div>
    </div>
  );
};

export default PromotionWrestlers;
