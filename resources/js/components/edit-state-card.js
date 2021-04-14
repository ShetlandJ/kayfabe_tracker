import React, { useState } from 'react';
import { getBackgroundColour } from '../utils/wrestler-state';
import format from 'date-fns/format';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

function EditStateCard ({state}) {
  const [title, setTitle] = useState(state.title);
  const [description, setDescription] = useState(state.description);
  const [startDate, setStartDate] = useState(state.start);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4">
      <div
        className="col-span-2 sm:col-span-1 xl:col-span-1 h-full w-4"
        style={{
          backgroundColor: getBackgroundColour(state)
        }}
      />

      <div className="col-span-2 sm:col-span-8 xl:col-span-8 p-2">
        <div>
          <label className="mr-2">
            Title:
            <input
              name="fname"
              type="text"
              value={title}
              // onChange={this.onInputchange}
            />
          </label>
        </div>
        {/* <h2 className="font-semibold text-2xl">{state.title}</h2> */}
        {/* <p> */}
        {/* {state.description} */}
        {/* </p> */}
      </div>
      <div className="col-span-2 sm:col-span-1 xl:col-span-1 p-2">
        {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> */}
      </div>
    </div>

  );
}

export default EditStateCard;
