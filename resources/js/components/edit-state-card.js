import React, { useState } from 'react';
import { getBackgroundColour } from '../utils/wrestler-state';
import format from 'date-fns/format';
import DatePicker from 'react-datepicker';
import { createWrestlerState, updateWrestlerState } from '../api/wrestlers';

import 'react-datepicker/dist/react-datepicker.css';

function EditStateCard ({ state, states, wrestler, setCreating, creating = false }) {
  const [title, setTitle] = useState(state.title);
  const [description, setDescription] = useState(state.description);
  const [status, setStatus] = useState(state.state_id);
  const [startDate, setStartDate] = useState(state.start);

  const updateWrestler = async () => {
    const payload = {
      title,
      description,
      status,
      startDate,
      wrestler_id: wrestler.id,
      state_id: state.id
    };

    if (creating) {
      await createWrestlerState(wrestler.id, payload);
    } else {
      await updateWrestlerState(wrestler.id, payload);
    }

    setCreating(false);
  };

  const buttonText = creating ? 'Create' : 'Update';

  const stateOptions = (
    states.map(st => (
      <option value={st.id} key={st.id}>
        {st.name}
      </option>
    ))
  );

  const stateSelector = (
    <select
      value={status}
      onChange={event => setStatus(event.target.value)}
      className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
    >
      <option value={null}>Please select</option>
      {stateOptions}
    </select>
  );

  return (
    <div className="bg-blue-100 lg:w-10/12 md:10/12 w-10/12 m-auto my-10 shadow-md">
      <div className="py-2 px-2 rounded-xl">
        <div action="" className="mt-6">
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

            {stateSelector}

            <DatePicker
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
              selected={new Date(startDate)}
              onChange={date => setStartDate(date)}
            />
          </div>

          <button onClick={updateWrestler} className="flex justify-center m-auto w-full p-2 my-2 bg-gray-500 text-white rounded-md">
            <div>
              {buttonText}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditStateCard;
