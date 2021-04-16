import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function PromotionCard ({promotion}) {
  const alias = promotion.alias.toLowerCase();

  return (
    <div
      className="rounded-lg shadow-lg bg-gray-700 w-full flex flex-row flex-wrap p-3 mb-3 antialiased"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}'/images/${promotion.image_url}')`,
        backgroundRepeat: 'no-repeat',
        backgroundsize: 'cover',
        backgroundBlendMode: 'multiply'
      }}>
      <div className="md:w-1/4 w-full">
        <img
          className="rounded-lg shadow-lg antialiased max-h-64 w-64"
          src={`/images/${promotion.image_url}`}
        />
      </div>
      <div className="md:w-3/4 w-full px-3 flex flex-row flex-wrap">
        <div className="w-full text-left text-gray-700 font-semibold relative pt-3 md:pt-0">
          <div className="text-2xl text-white leading-tight">{promotion.alias} ({promotion.name})</div>
          <div className="text-normal text-gray-300">
            <span className="pb-1">{promotion.description}</span>
          </div>
          <div className="text-md text-gray-300 hover:text-gray-400 flex justify-start pt-3">
            <button className="p-2 my-2 bg-gray-500 text-white rounded-md">
              <Link to={`/promotion/${alias}`}>
                View Wrestlers
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}

PromotionCard.propTypes = {
  promotion: PropTypes.object.required
};

export default PromotionCard;
