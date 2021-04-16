import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { getWrestlerHistoryForPromotion } from '../api/wrestlers';
import { useRouteMatch } from 'react-router-dom';
import WrestlerProfileCard from '../components/wrestler-card';
import Breadcrumbs from '../components/breadcrumbs';

function PromotionWrestlers () {
  const [loading, setLoading] = useState(true);
  const [promotion, setPromotion] = useState([]);
  const [wrestler, setWrestler] = useState([]);
  const [crumbs, setCrumbs] = useState([]);
  const alias = useRouteMatch().params.alias;
  const slug = useRouteMatch().params.slug;

  useEffect(() => {
    getWrestlerHistoryForPromotion(alias, slug)
      .then(({ promotion, wrestler }) => {
        setPromotion(promotion);
        setWrestler(wrestler);
        setLoading(false);
        setCrumbs([
          {text: 'Promotions', to: `/`},
          {text: 'Wrestlers', to: `/promotion/${promotion.alias.toLowerCase()}`},
          {text: wrestler.ring_name, to: null, active: true}
        ]);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <Breadcrumbs breadcrumbs={crumbs} />
      <div>
        {!loading && (
          <WrestlerProfileCard wrestler={wrestler} />
        )}
      </div>
    </div>
  );
};

export default PromotionWrestlers;
