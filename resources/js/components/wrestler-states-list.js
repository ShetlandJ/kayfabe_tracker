import React from 'react';
import { useAuth } from '../context/auth';

function WrestlerStatesList ({states, editState, deleteState}) {
  const rows = states.map(state => (
    <tr key={state.id}>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-4/5">
        <div className="flex items-center">
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">
              {state.title}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-1/5 text-right">
        <button
          onClick={() => editState(state)}
          className="p-2 my-2 bg-gray-500 text-white rounded-md"
        >
            Edit
        </button>

        <button
          onClick={() => deleteState(state)}
          className="p-2 my-2 ml-2 bg-red-400 text-white rounded-md"
        >
            X
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="container p-2 mx-auto flex flex-col">
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th
              className="px-5 py-3 border-b-2 text-left border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">
              State title
            </th>
            <th
              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                &nbsp;
            </th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>

    </div>
  );
}

export default WrestlerStatesList;
