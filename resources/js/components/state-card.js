import React from 'react';

function StateCard () {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-4">
      <div className="col-span-2 sm:col-span-1 xl:col-span-1">
        <img
          alt="..."
          src="https://source.unsplash.com/gUBJ9vSlky0"
          className="h-24 w-24 rounded  mx-auto"
        />
      </div>
      <div className="col-span-2 sm:col-span-4 xl:col-span-4">
        <h3 className="font-semibold">Veggie</h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="col-span-2 sm:col-span-1 xl:col-span-1 italic ">$22</div>
    </div>

  );
}

export default StateCard;
