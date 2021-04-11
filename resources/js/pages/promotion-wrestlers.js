import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { getPromotionWrestlers } from '../api/promotions';
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

  const getInitials = (fullName) => {
    const allNames = fullName.trim().split(' ');
    const initials = allNames.reduce((acc, curr, index) => {
      if (index === 0 || index === allNames.length - 1) {
        acc = `${acc}${curr.charAt(0).toUpperCase()}`;
      }
      return acc;
    }, ['']);
    return initials;
  };

  const wrestlerList = wrestlers.map((wrestler) => (
    <tr className="border-b border-gray-200 hover:bg-gray-100" key={wrestler.id}>
      <td className="py-3 text-left whitespace-nowrap hidden md:block">
        <div className="rounded-full bg-green-50 w-10 h-10 flex items-center justify-center">
          {getInitials(wrestler.ring_name)}
        </div>

        <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
          <span className="hidden group-hover:table-cell text-white font-bold align-middle">KR</span>
        </div>
      </td>
      <td className="text-left whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml-2">
            {wrestler.ring_name}
          </div>
        </div>
      </td>
      <td className="py-3 px-2 text-center">
        <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Active</span>
      </td>
      <td className="py-3 px-2 text-center">
        <div className="flex item-center justify-center">
          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
            View
          </div>
        </div>
      </td>
    </tr>

  ));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex justify-center">
        <table className="w-5/6 mx-4 my-4 table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-2 text-left hidden md:block" />
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
