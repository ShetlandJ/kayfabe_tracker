import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/auth';
import { Link } from 'react-router-dom';
import { allWrestlers, deleteWrestler } from '../api/wrestlers';

function Home () {
  let { currentUser } = useAuth();

  const [wrestlers, setWrestlers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllWrestlers = () => {
    return allWrestlers()
      .then(({ data }) => {
        setWrestlers(data);
        setLoading(false);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getAllWrestlers();
  }, []);

  const removeWrestler = async (wrestlerId) => {
    await deleteWrestler(wrestlerId);
    getAllWrestlers();
  };

  const rows = wrestlers.map(wrestler => (
    <tr key={wrestler.id}>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-4/5">
        <div className="flex items-center">
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">
              {wrestler.ring_name}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-1/5 text-right">
        <button className="p-2 my-2 bg-gray-500 text-white rounded-md">
          <Link to={`admin/wrestler/${wrestler.slug}`}>
            Edit
          </Link>
        </button>

        {/* <button
          onClick={() => removeWrestler(wrestler.id)}
          disabled
          className="p-2 my-2 ml-2 bg-red-400 text-white rounded-md"
        >
            X
        </button> */}
      </td>
    </tr>
  ));

  return (
    <div className="container p-2 mx-auto flex flex-col">
      <button className="p-2 my-2 bg-gray-500 text-white rounded-md">
        <Link to="/admin/add-wrestler">+ Add Wrestler</Link>
      </button>

      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th
              className="px-5 py-3 border-b-2 text-left border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Wrestler
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

export default Home;
