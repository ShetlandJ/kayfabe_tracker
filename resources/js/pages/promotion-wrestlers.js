import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { getPromotionWrestlers } from '../api/promotions';
import { getBackgroundColour, getTextColour } from '../utils/wrestler-state';
import { getInitials } from '../utils/wrestlers';
import { Link, useRouteMatch } from 'react-router-dom';

function PromotionWrestlers () {
  const [loading, setLoading] = useState(true);
  const [promotion, setPromotion] = useState([]);
  const [wrestlers, setWrestlers] = useState([]);
  const alias = useRouteMatch().params.alias;

  useEffect(() => {
    getPromotionWrestlers(alias)
      .then(({ promotion, wrestlers }) => {
        setPromotion(promotion);
        setWrestlers(wrestlers);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  const wrestlerList = wrestlers.map((wrestler) => (
    <tr className="border-b border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800" key={wrestler.id}>
      <td className="text-left whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-2 text-lg">
            <span className="rounded-full bg-green-50 w-10 h-10 p-2 items-center justify-center mr-2">
              {getInitials(wrestler.ring_name)}
            </span>
            <span className="dark:text-gray-200">
              {wrestler.ring_name}
            </span>
          </div>
        </div>
      </td>
      <td className="py-3 px-2 text-center">
        {wrestler.states.length > 0 && (
          <span
            className="py-1 px-3 rounded-full text-xs"
            style={{
              backgroundColor: getBackgroundColour(wrestler.states[0]),
              color: getTextColour(wrestler.states[0])
            }}
          >
            {wrestler.states[0].name}
          </span>
        )}
      </td>
      <td className="py-3 px-2 text-center">
        <button className="p-2 my-2 bg-gray-500 text-white rounded-md">
          <Link to={`/promotion/${alias}/${wrestler.slug}`}>
            <span className="flex">View <span className="ml-1 hidden md:block">History</span></span>
          </Link>
        </button>

      </td>
    </tr>

  ));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex justify-center">
        <table className="w-11/12 mx-4 my-4 table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-200 uppercase text-sm leading-normal">
              <th className="py-3 px-2 text-left">Wrestler</th>
              <th className="py-3 px-2 text-center">Status</th>
              <th className="py-3 px-2 text-center" />
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {wrestlerList}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PromotionWrestlers;
