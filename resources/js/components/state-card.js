import React from 'react';
import { getBackgroundColour } from '../utils/wrestler-state';
import format from 'date-fns/format';

function StateCard ({state}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4">
      <div
        className="col-span-2 sm:col-span-1 xl:col-span-1 h-full w-4"
        style={{
          backgroundColor: getBackgroundColour(state)
        }}
      >

      </div>
      <div className="col-span-2 sm:col-span-8 xl:col-span-8 p-2">
        <h2 className="font-semibold text-2xl">{state.title}</h2>
        <p>
          {state.description}
        </p>
      </div>
      <div className="col-span-2 sm:col-span-1 xl:col-span-1 p-2">
        { format(new Date(state.start), 'yyyy/MM/dd') }
      </div>
    </div>

  );
}

export default StateCard;
