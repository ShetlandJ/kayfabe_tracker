import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getInitials } from '../utils/wrestlers';
import EditStateCard from './edit-state-card';
import { getAllStates } from '../api/states';
import { useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function EditWrestlerCard ({ wrestler }) {
  const [creating, setCreating] = useState(false);
  const [loading, setLoading] = useState(true);
  const [states, setStates] = useState([]);
  const slug = useRouteMatch().params.slug;

  const emptyState = {
    title: '',
    description: '',
    sttus: null,
    start: new Date()
  };

  useEffect(() => {
    getAllStates(slug)
      .then(({ data }) => {
        setStates(data);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-between mt-4 w-11/12 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
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

      <div className="mt-3 p-3 w-11/12">
        {wrestler.states.length > 0 && wrestler.states.map(state => (
          <div className="rounded-lg mb-2" key={state.id}>
            <EditStateCard state={state} states={states} wrestler={wrestler} setCreating={setCreating} />
          </div>
        ))}

        {!creating && (
          <button
            className="flex m-auto items-center justify-center bg-green-200 w-2/3 h-64"
            onClick={() => setCreating(true)}
          >
            <FontAwesomeIcon icon={faPlus} size="8x" />
          </button>
        )}

        {creating && (
          <div className="rounded-lg mb-2">
            <EditStateCard
              state={emptyState}
              states={states}
              wrestler={wrestler}
              setCreating={setCreating}
              creating={true}
            />
          </div>
        )}
      </div>
    </div>
  );
}

EditWrestlerCard.propTypes = {
  wrestler: PropTypes.object.required
};

export default EditWrestlerCard;
