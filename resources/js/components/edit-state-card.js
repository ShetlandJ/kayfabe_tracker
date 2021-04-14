import React, { useState } from 'react';
import { getBackgroundColour } from '../utils/wrestler-state';
import format from 'date-fns/format';
import DatePicker from 'react-date-picker';

function EditStateCard ({ state }) {
  const [title, setTitle] = useState(state.title);
  const [description, setDescription] = useState(state.description);
  const [startDate, setStartDate] = useState(new Date(state.start));

  return (
    <div className="bg-blue-100 lg:w-10/12 md:10/12 w-10/12 m-auto my-10 shadow-md">
      <div className="py-2 px-2 rounded-xl">
        <form action="" className="mt-6">
          <div className="my-5 text-sm">
            <label htmlFor="username" className="block text-black">Title</label>
            <input
              type="text"
              autoFocus
              id="username"
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />

            <label htmlFor="username" className="block text-black mt-2">Description</label>
            <textarea
              type="text"
              autoFocus
              id="username"
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
              value={description}
              onChange={event => setDescription(event.target.value)}
              rows="3"
            />
          </div>
        </form>
      </div>
    </div>

  );
}

export default EditStateCard;
