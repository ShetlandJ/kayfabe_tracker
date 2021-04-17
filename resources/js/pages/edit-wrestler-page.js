import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { getAllWrestlerHistory } from '../api/wrestlers';
import { useRouteMatch } from 'react-router-dom';
import EditWrestler from '../components/edit-wrestler-card';

function PromotionWrestlers () {
  const [loading, setLoading] = useState(true);
  const [promotion, setPromotion] = useState([]);
  const [wrestler, setWrestler] = useState([]);
  const slug = useRouteMatch().params.slug;

  const getWrestlerHistory = () => {
    getAllWrestlerHistory(slug)
      .then(({ data }) => {
        setWrestler(data);
        setLoading(false);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getWrestlerHistory();
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-11/12">
      <div>
        {!loading && (
          <EditWrestler wrestler={wrestler} getWrestlerHistory={getWrestlerHistory} />
        )}
      </div>
    </div>
  );
};

export default PromotionWrestlers;
