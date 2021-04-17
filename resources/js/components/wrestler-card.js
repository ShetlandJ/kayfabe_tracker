import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getInitials } from '../utils/wrestlers';
import StateCard from './state-card';

function WrestlerProfileCard ({ wrestler }) {
  const [includeInactive, setIncludeInactive] = useState(true);

  let wBreakdown = wrestler.breakdown;
  if (!includeInactive) wBreakdown = wrestler.breakdown_simplified;

  const breakdown = (
    wBreakdown && wBreakdown.map((data, index) => (
      <div
        key={data.index}
        style={{
          width: `${data.percent}%`,
          backgroundColor: data.colour
        }}
        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
      />
    )));

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-between mt-4 w-2/3 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
        <div className="flex items-center space-x-4">
          <div className="rounded-full h-auto text-3xl flex bg-green-50 w-20 h-20 p-2 items-center justify-center mr-2">
            {getInitials(wrestler.ring_name)}
          </div>
          <div className="flex flex-col space-y-1">
            <p className="font-semibold text-gray-800 dark:text-gray-200 sm:text-lg dark:hover:text-primary hover:text-primary hover:underline">
              {wrestler.ring_name}
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              {wrestler.biography}
            </div>
          </div>
        </div>

      </div>

      <div className="mt-3 p-3 w-2/3">

        <p className="text-4xl mb-2 text-center dark:text-gray-200">History</p>

        <div className="flex justify-center">

          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600"
              checked={includeInactive}
              onChange={() => setIncludeInactive(!includeInactive)}
            />
            <span className="ml-2 text-gray-700">Include inactive</span>
          </label>
        </div>
        <div className="relative pt-1">
          <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-lightBlue-200">
            {breakdown}
          </div>
        </div>

        {wrestler.states.length > 0 && wrestler.states.map(state => (
          <div className="bg-gray-100 dark:bg-gray-800 dark:text-gray-200 rounded-lg mb-2" key={state.id}>
            <StateCard state={state} />
          </div>
        ))}

      </div>
    </div>
  );
}

WrestlerProfileCard.propTypes = {
  wrestler: PropTypes.object.required
};

export default WrestlerProfileCard;
